//Fair use declaration/citation: Refer to the readme.md.

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from "antlr4ng";
import { SimpleLangLexer } from "./parser/src/SimpleLangLexer";
import { SimpleLangParser, ProgContext, ExpressionContext } from "./parser/src/SimpleLangParser";
import { SimpleLangVisitor } from "./parser/src/SimpleLangVisitor"; 


enum InstructionType {
    PUSH = "PUSH",
    ADD = "ADD",
    SUBTRACT = "SUBTRACT",
    MULTIPLY = "MULTIPLY",
    DIVIDE = "DIVIDE"
}

interface Instruction {
    type: InstructionType;
    operand?: number;
}

class BytecodeGenerator extends AbstractParseTreeVisitor<void> implements SimpleLangVisitor<void> {
    public instructions: Instruction[] = [];

    visitProg(ctx: ProgContext): void {
        this.visit(ctx.expression());
    }

    visitExpression(ctx: ExpressionContext): void {
        const childCount = ctx.getChildCount();
        if (childCount === 1) {
            const value = parseInt(ctx.getText());
            this.instructions.push({ type: InstructionType.PUSH, operand: value });
        } else if (childCount === 3) {
            if (ctx.getChild(0).getText() === "(" && ctx.getChild(2).getText() === ")") {
                this.visit(ctx.getChild(1) as ExpressionContext);
            } else {
                this.visit(ctx.getChild(0) as ExpressionContext);
                this.visit(ctx.getChild(2) as ExpressionContext);
                const operator = ctx.getChild(1).getText();
                if (operator === "+") {
                    this.instructions.push({ type: InstructionType.ADD });
                } else if (operator === "-") {
                    this.instructions.push({ type: InstructionType.SUBTRACT });
                } else if (operator === "*") {
                    this.instructions.push({ type: InstructionType.MULTIPLY });
                } else if (operator === "/") {
                    this.instructions.push({ type: InstructionType.DIVIDE });
                } else {
                    throw new Error(`Unsupported operator: ${operator}`);
                }
            }
        } else {
            throw new Error(`Invalid expression structure: ${ctx.getText()}`);
        }
    }

    protected defaultResult(): void { /* no-op */ }
    protected aggregateResult(_aggregate: void, _nextResult: void): void { /* no-op */ }
}

class VirtualMachine {
    private stack: number[] = [];

    execute(instructions: Instruction[]): number {
        for (const inst of instructions) {
            switch (inst.type) {
                case InstructionType.PUSH:
                    if (inst.operand === undefined) {
                        throw new Error("PUSH requires an operand.");
                    }
                    this.stack.push(inst.operand);
                    break;
                case InstructionType.ADD: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Insufficient values on stack for ADD.");
                    }
                    this.stack.push(a + b);
                    break;
                }
                case InstructionType.SUBTRACT: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Insufficient values on stack for SUBTRACT.");
                    }
                    this.stack.push(a - b);
                    break;
                }
                case InstructionType.MULTIPLY: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Insufficient values on stack for MULTIPLY.");
                    }
                    this.stack.push(a * b);
                    break;
                }
                case InstructionType.DIVIDE: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Insufficient values on stack for DIVIDE.");
                    }
                    if (b === 0) {
                        throw new Error("Division by zero.");
                    }
                    this.stack.push(a / b);
                    break;
                }
                default:
                    throw new Error(`Unknown instruction type: ${inst.type}`);
            }
        }
        if (this.stack.length !== 1) {
            throw new Error("Unexpected stack state after execution.");
        }
        return this.stack[0];
    }
}

export class SimpleLangEvaluator extends BasicEvaluator {
    private runCount: number = 0;

    constructor(plugin: IRunnerPlugin) {
        super(plugin);
    }

    async evaluateChunk(code: string): Promise<void> {
        this.runCount++;
        try {
            const input = CharStream.fromString(code);
            const lexer = new SimpleLangLexer(input);
            const tokens = new CommonTokenStream(lexer);
            const parser = new SimpleLangParser(tokens);

            const tree = parser.prog();

            const generator = new BytecodeGenerator();
            generator.visit(tree);
            const instructions = generator.instructions;

            const vm = new VirtualMachine();
            const result = vm.execute(instructions);

            this.conductor.sendOutput(`Result: ${result}`);
        } catch (error) {
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}