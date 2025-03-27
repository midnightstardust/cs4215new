//Fair use declaration/citation: Refer to the readme.md.

import * as antlr from "antlr4ng";
import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { CrateContext, ExpressionContext, ExpressionStatementContext, LiteralExpressionContext, RustParser, StatementContext, StatementsContext } from "./parser/src/RustParser";

const DEBUG = true;

enum InstructionType {
    PUSH = "PUSH",
    ADD  = "ADD",
    SUB  = "SUB",
    MUL  = "MUL",
    DIV  = "DIV",
    POP  = "POP"
}

interface Instruction {
    type: InstructionType,
    operand?: any;
}

const debug = (...s: any[])  => {
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

    private isBinaryArithmeticOperation(expr: ExpressionContext) {
        return expr.getChildCount() === 3 && ['+', '-', '*', '/'].includes(expr.getChild(1).getText());
    }

    private isBracketExpression(expr: ExpressionContext) {
        return expr.getChildCount() === 3 && expr.getChild(0).getText() === '(' && expr.getChild(2).getText() === ')'
    }

    private visit(_expr: antlr.ParserRuleContext): void {
        debug(_expr.toStringTree(this.parser));
        if (_expr.ruleIndex === RustParser.RULE_expression) {
            const expr = _expr as ExpressionContext;

            if (expr.getChildCount() === 1) {
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
        } else if (_expr.ruleIndex === RustParser.RULE_literalExpression) {
            const expr = _expr as LiteralExpressionContext;

            debug(`${_expr.toStringTree(this.parser)} is a literal expression; compile to PUSH ${expr.INTEGER_LITERAL().toString()}`);
            this.instructions.push({ type: InstructionType.PUSH, operand: parseInt(expr.INTEGER_LITERAL().toString())});
        } else if (_expr.ruleIndex === RustParser.RULE_statements) {
            const expr = _expr as StatementsContext;
            for(const statement of expr.statement()) {
                this.visit(statement);
                this.instructions.push({ type: InstructionType.POP });
            }
            this.instructions.pop();
        } else if (_expr.ruleIndex === RustParser.RULE_statement) {
            const expr = _expr as StatementContext;
            this.visit(expr.getChild(0) as antlr.ParserRuleContext);
        } else if (_expr.ruleIndex === RustParser.RULE_expressionStatement) {
            const expr = _expr as ExpressionStatementContext;
            this.visit(expr.getChild(0) as antlr.ParserRuleContext);
        } else {
            throw new Error(`Unable to evaluate: ${_expr.toStringTree(this.parser)}`);
        }
    }

    public compile(parser: RustParser, crate: CrateContext): Instruction[] {
        this.instructions = [];
        this.parser = parser;
        this.visit(crate.item(0).visItem().function_().blockExpression().statements());
        return this.instructions;
    }
}

class SimpleVirtualMachine {
    private stack: number[] = [];
    public execute(instructions: Instruction[]) : number {
        this.stack = []
        for(const instruct of instructions) {
            switch(instruct.type) {
                case InstructionType.PUSH: {
                    this.stack.push(instruct.operand);
                    break;
                }
                case InstructionType.ADD: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    this.stack.push(a + b);
                    break;
                }
                case InstructionType.SUB: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    this.stack.push(a + b);
                    break;
                }
                case InstructionType.MUL: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    this.stack.push(a * b);
                    break;
                }
                case InstructionType.DIV: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (b === 0) {
                        throw new Error("Division by zero");
                    }
                    this.stack.push(Math.floor(a / b));
                    break;
                }
                case InstructionType.POP: {
                    if (this.stack.length === 0) {
                        throw new Error("Stack is empty");
                    }
                    this.stack.pop();
                    break;
                }
                default: {
                    throw new Error(`Unknown instruction type: ${instruct.type}`);
                }
            }
        }
        return this.stack.pop();
    }
}

export class RustEvaluator extends BasicEvaluator {

    constructor(plugin: IRunnerPlugin) {
        super(plugin);
    }

    async evaluateChunk(code: string): Promise<void> {
        try {
            const input = CharStream.fromString(code);
            const lexer = new RustLexer(input);
            const tokens = new CommonTokenStream(lexer);
            const parser = new RustParser(tokens);
            const compiler = new RustCompiler();

            const tree = parser.crate();
            this.conductor.sendOutput(`Crate Result:\n${tree.toStringTree(parser)}`);

            this.conductor.sendOutput(`\n\n${tree.item(0).visItem().function_().blockExpression().statements().toStringTree(parser)}`)

            const instructions = compiler.compile(parser, tree);
            debug(instructions);

            const vm = new SimpleVirtualMachine();
            const result = vm.execute(instructions);
            this.conductor.sendOutput(`Result:\n${result}`);
        } catch (error) {
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}
