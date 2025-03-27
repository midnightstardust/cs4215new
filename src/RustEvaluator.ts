//Fair use declaration/citation: Refer to the readme.md.

import * as antlr from "antlr4ng";
import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { BlockExpressionContext, CrateContext, ExpressionContext, ExpressionStatementContext, ExpressionWithBlockContext, IdentifierContext, LetStatementContext, LiteralExpressionContext, RustParser, StatementContext, StatementsContext } from "./parser/src/RustParser";

const DEBUG = true;

const UNDEFINED = "undefined";

enum InstructionType {
    PUSH   = "PUSH",
    ADD    = "ADD",
    SUB    = "SUB",
    MUL    = "MUL",
    DIV    = "DIV",
    POP    = "POP",
    ENTER  = "ENTER",
    ASSIGN = "ASSIGN",
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

class CompileError extends Error {
    public constructor(message?: string) {
        super(message);
    }
}

class VMError extends Error {
    public constructor(message?: string) {
        super(message);
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
    private envStack: Map<string, any>[];

    private isBinaryArithmeticOperation(expr: ExpressionContext) {
        return expr.getChildCount() === 3 && ['+', '-', '*', '/'].includes(expr.getChild(1).getText());
    }

    private isBracketExpression(expr: ExpressionContext) {
        return expr.getChildCount() === 3 && expr.getChild(0).getText() === '(' && expr.getChild(2).getText() === ')'
    }

    private inEnv(sym: string): boolean {
        for(let i = this.envStack.length-1;i>=0;i--) {
            if (this.envStack[i].has(sym)) {
                return true;
            }
        }   
        return false;
    }

    private getIdentifierInLetStatement(expr: LetStatementContext) : antlr.TerminalNode | null {
        return expr.patternNoTopAlt().patternWithoutRange()?.identifierPattern()?.identifier()?.NON_KEYWORD_IDENTIFIER();
    }

    private visit(_expr: antlr.ParserRuleContext): void {
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
                throw new CompileError(`Unable to evaluate: ${_expr.toStringTree(this.parser)}`);
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
            if (expr.SEMI()) {
                this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED })
            } else {
                this.visit(expr.getChild(0) as antlr.ParserRuleContext);
            }
        } else if (_expr.ruleIndex === RustParser.RULE_expressionStatement) {
            const expr = _expr as ExpressionStatementContext;
            this.visit(expr.getChild(0) as antlr.ParserRuleContext);
        } else if (_expr.ruleIndex === RustParser.RULE_expressionWithBlock) {
            const expr = _expr as ExpressionWithBlockContext;
            this.visit(expr.getChild(expr.getChildCount() - 1) as antlr.ParserRuleContext);
        } else if (_expr.ruleIndex === RustParser.RULE_blockExpression) {
            const expr = _expr as BlockExpressionContext;
            const statements = expr.statements();
            if (statements) {
                const newEnv = new Map<string, any>();
                this.envStack.push(newEnv);
                this.instructions.push({ type: InstructionType.ENTER, operand: this.envStack.slice() });
                this.visit(statements);
                this.envStack.pop();
                this.instructions.push({ type: InstructionType.ENTER, operand: this.envStack.slice() });
            } else {
                this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED })
            }
        } else if (_expr.ruleIndex === RustParser.RULE_letStatement) {
            // we only support let a;
            // no initial assignment allowed;
            const expr = _expr as LetStatementContext;
            const identifier = this.getIdentifierInLetStatement(expr);
            if (identifier === null || identifier === undefined) {
                throw new CompileError(`Unable to evaluate: ${_expr.toStringTree(this.parser)}`)
            }
            const identifierStr = identifier.getText();
            if (this.envStack[this.envStack.length - 1].has(identifierStr)) {
                throw new CompileError(`Duplicate identifier: ${identifierStr}`);
            }
            this.envStack[this.envStack.length - 1][identifierStr] = UNDEFINED;
            this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
        } else {
            throw new CompileError(`Unable to evaluate: ${_expr.toStringTree(this.parser)}`);
        }
    }

    public compile(parser: RustParser, crate: CrateContext): Instruction[] {
        this.instructions = [];
        this.parser = parser;
        this.envStack = [];
        this.visit(crate.item(0).visItem().function_().blockExpression());
        return this.instructions;
    }
}

class SimpleVirtualMachine {
    public execute(instructions: Instruction[]) : number {
        const stack = [];
        let envs = [];
        for(const instruct of instructions) {
            switch(instruct.type) {
                case InstructionType.PUSH: {
                    if (instruct.operand === null || instruct.operand === undefined) {
                        throw new VMError("PUSH missing operand");
                    }
                    stack.push(instruct.operand);
                    break;
                }
                case InstructionType.ADD: {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a + b);
                    break;
                }
                case InstructionType.SUB: {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a - b);
                    break;
                }
                case InstructionType.MUL: {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a * b);
                    break;
                }
                case InstructionType.DIV: {
                    const b = stack.pop();
                    const a = stack.pop();
                    if (b === 0) {
                        throw new VMError("Division by zero");
                    }
                    stack.push(Math.floor(a / b));
                    break;
                }
                case InstructionType.POP: {
                    if (stack.length === 0) {
                        throw new VMError("Stack is empty");
                    }
                    stack.pop();
                    break;
                }
                case InstructionType.ENTER: {
                    if (instruct.operand === null || instruct.operand === undefined) {
                        throw new VMError("ENTER missing operand");
                    }
                    envs = instruct.operand;
                    break;
                }
                default: {
                    throw new VMError(`Unknown instruction type: ${instruct.type}`);
                }
            }
        }
        return stack.pop();
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

            const instructions = compiler.compile(parser, tree);
            debug(instructions);

            const vm = new SimpleVirtualMachine();
            const result = vm.execute(instructions);
            this.conductor.sendOutput(`Result:\n${result}`);
        } catch (error) {
            if (error instanceof CompileError) {
                this.conductor.sendOutput(`Compile Error: ${error.message}`)
            } else if(error instanceof VMError) {
                this.conductor.sendOutput(`VM execution Error: ${error.message}`)
            } else if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}
