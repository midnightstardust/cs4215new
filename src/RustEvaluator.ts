//Fair use declaration/citation: Refer to the readme.md.

import * as antlr from "antlr4ng";
import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { CrateContext, ExpressionContext, LiteralExpressionContext, RustParser } from "./parser/src/RustParser";

const DEBUG = true;

enum InstructionType {
    PUSH = "PUSH",
    ADD = "ADD",
    SUB = "SUB",
    MUL = "MUL",
    DIV = "DIV"
}

interface Instruction {
    type: InstructionType,
    operand?: any;
}

const debug = (...s: string[])  => {
    if (DEBUG) {
        console.log(...s);
    }
}

class RustCompiler {
    private instructions: Instruction[];
    private parser: RustParser;
    private binaryArithmeticTextToInstructionType: { [name: string]: InstructionType } = {
        '+': InstructionType.ADD,
        '-': InstructionType.SUB,
        '*': InstructionType.MUL,
        '/': InstructionType.DIV
    };

    private isExpression(expr: antlr.ParserRuleContext) {
       return expr.ruleIndex === RustParser.RULE_expression;
    }

    private isLiteralExpression(expr: antlr.ParserRuleContext) {
        return expr.ruleIndex === RustParser.RULE_literalExpression;
    }

    private isBinaryArithmeticOperation(expr: ExpressionContext) {
        return expr.getChildCount() === 3 && ['+', '-', '*', '/'].includes(expr.getChild(1).getText());
    }

    private isBracketExpression(expr: ExpressionContext) {
        return expr.getChildCount() === 3 && expr.getChild(0).getText() === '(' && expr.getChild(2).getText() === ')'
    }

    private visit(_expr: antlr.ParserRuleContext): void {
        if (this.isExpression(_expr)) {
            const expr = _expr as ExpressionContext;

            if (expr.getChildCount() == 1) {
                this.visit(expr.getChild(0) as antlr.ParserRuleContext);
            } else if(this.isBinaryArithmeticOperation(expr)) {
                this.visit(expr.getChild(0) as antlr.ParserRuleContext);
                this.visit(expr.getChild(2) as antlr.ParserRuleContext);

                const op = expr.getChild(1).getText();
                const instructType = this.binaryArithmeticTextToInstructionType[op];
                debug(`${_expr.toStringTree(this.parser)} is an expression; compile ${instructType}`)
                this.instructions.push({ type: instructType });
            } else if(this.isBracketExpression(expr)) {
                this.visit(expr.getChild(1) as antlr.ParserRuleContext);
            } else {
                throw new Error(`Unable to evaluate: ${_expr.toStringTree(this.parser)}`);
            }
        } else if (this.isLiteralExpression(_expr)) {
            const expr = _expr as LiteralExpressionContext;

            debug(`${_expr.toStringTree(this.parser)} is a literal expression; compile to PUSH ${expr.INTEGER_LITERAL().toString()}`);
            this.instructions.push({ type: InstructionType.PUSH, operand: parseInt(expr.INTEGER_LITERAL().toString())});

        } else {
            throw new Error(`Unable to evaluate: ${_expr.toStringTree(this.parser)}`);
        }
    }

    public compile(parser: RustParser, crate: CrateContext): Instruction[] {
        this.instructions = [];
        this.parser = parser;
        // assume main's body only has one statement first (must end in a ;)
        this.visit(crate.item(0).visItem().function_().blockExpression().statements().statement(0).expressionStatement().expression());
        return this.instructions;
    }
}

// class VirtualMachine {
//     public execute()
// }

export class RustEvaluator extends BasicEvaluator {
    private runCount: number = 0;

    constructor(plugin: IRunnerPlugin) {
        super(plugin);
    }

    async evaluateChunk(code: string): Promise<void> {
        this.runCount++;
        try {
            const input = CharStream.fromString(code);
            const lexer = new RustLexer(input);
            const tokens = new CommonTokenStream(lexer);
            const parser = new RustParser(tokens);
            const compiler = new RustCompiler();

            const tree = parser.crate();
            this.conductor.sendOutput(`Crate Result:\n${tree.toStringTree(parser)}`);

            const instructions = compiler.compile(parser, tree);
            console.log(instructions);
        } catch (error) {
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}
