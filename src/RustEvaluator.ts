//Fair use declaration/citation: Refer to the readme.md.

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { RustParser, CrateContext, ExpressionContext } from "./parser/src/RustParser";
import { RustVisitor } from "./parser/src/RustVisitor";

enum OpType {
    PUSH = "PUSH",
    ADD = "ADD",
    SUB = "SUB",
    MUL = "MUL",
    DIV = "DIV"
}

interface Op {
    type: OpType;
    operand?: number;
}

class RustEvaluatorBytecodeGenerator extends AbstractParseTreeVisitor<void> implements RustVisitor<void> {
    public ops: Op[] = [];

    visitCrate(ctx: CrateContext): void {
        for (let i = 0; i < ctx.getChildCount(); i++) {
            const child = ctx.getChild(i);
            const text = child.getText();
            if (text.startsWith("fnmain") || text.startsWith("fn main")) {
                for (let j = 0; j < child.getChildCount(); j++) {
                    const sub = child.getChild(j);
                    const subText = sub.getText();
                    if (subText.startsWith("{") && subText.endsWith("}")) {
                        const inner = subText.substring(1, subText.length - 1).trim();
                        const cleaned = inner.endsWith(";") ? inner.slice(0, -1).trim() : inner;
                        const innerInput = CharStream.fromString(cleaned);
                        const innerLexer = new RustLexer(innerInput);
                        const innerTokens = new CommonTokenStream(innerLexer);
                        const innerParser = new RustParser(innerTokens);
                        const exprTree = innerParser.expression();
                        this.visit(exprTree);
                        return;
                    }
                }
            }
        }
        if (ctx.getChildCount() > 0) {
            this.visit(ctx.getChild(0));
        }
    }

    visitExpression(ctx: ExpressionContext): void {
        const count = ctx.getChildCount();
        if (count === 1) {
            const num = parseInt(ctx.getText(), 10);
            if (isNaN(num)) {
                throw new Error(`Invalid number: ${ctx.getText()}`);
            }
            this.ops.push({ type: OpType.PUSH, operand: num });
        } else if (count === 3) {
            const first = ctx.getChild(0).getText();
            const second = ctx.getChild(1).getText();
            const third = ctx.getChild(2).getText();
            if (first === "(" && third === ")") {
                this.visit(ctx.getChild(1) as ExpressionContext);
            } else {
                this.visit(ctx.getChild(0) as ExpressionContext);
                this.visit(ctx.getChild(2) as ExpressionContext);
                if (second === "+") {
                    this.ops.push({ type: OpType.ADD });
                } else if (second === "-") {
                    this.ops.push({ type: OpType.SUB });
                } else if (second === "*") {
                    this.ops.push({ type: OpType.MUL });
                } else if (second === "/") {
                    this.ops.push({ type: OpType.DIV });
                } else {
                    throw new Error(`Unsupported operator: ${second}`);
                }
            }
        } else {
            throw new Error(`Unsupported expression structure: ${ctx.getText()}`);
        }
    }

    protected defaultResult(): void { }
    protected aggregateResult(_aggregate: void, _next: void): void { }
}

class RustEvaluatorVM {
    private stack: number[] = [];
    private history: string[] = [];

    run(ops: Op[]): number {
        for (const op of ops) {
            switch (op.type) {
                case OpType.PUSH:
                    if (op.operand === undefined) {
                        throw new Error("PUSH operation missing operand. Stack: " + JSON.stringify(this.stack));
                    }
                    this.stack.push(op.operand);
                    this.history.push(`PUSH ${op.operand} => [${this.stack.join(", ")}]`);
                    break;
                case OpType.ADD: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Stack underflow on ADD. Stack: " + JSON.stringify(this.stack));
                    }
                    const result = a + b;
                    this.stack.push(result);
                    this.history.push(`ADD ${a} + ${b} = ${result} => [${this.stack.join(", ")}]`);
                    break;
                }
                case OpType.SUB: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Stack underflow on SUB. Stack: " + JSON.stringify(this.stack));
                    }
                    const result = a - b;
                    this.stack.push(result);
                    this.history.push(`SUB ${a} - ${b} = ${result} => [${this.stack.join(", ")}]`);
                    break;
                }
                case OpType.MUL: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Stack underflow on MUL. Stack: " + JSON.stringify(this.stack));
                    }
                    const result = a * b;
                    this.stack.push(result);
                    this.history.push(`MUL ${a} * ${b} = ${result} => [${this.stack.join(", ")}]`);
                    break;
                }
                case OpType.DIV: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) {
                        throw new Error("Stack underflow on DIV. Stack: " + JSON.stringify(this.stack));
                    }
                    if (b === 0) {
                        throw new Error("Division by zero. Stack: " + JSON.stringify(this.stack));
                    }
                    const result = Math.floor(a / b);
                    this.stack.push(result);
                    this.history.push(`DIV ${a} / ${b} = ${result} => [${this.stack.join(", ")}]`);
                    break;
                }
                default:
                    throw new Error(`Unknown operation: ${op.type}. Stack: ` + JSON.stringify(this.stack));
            }
        }
        if (this.stack.length !== 1) {
            throw new Error("Final stack did not resolve to a single value. Stack: " + JSON.stringify(this.stack) + " History: " + JSON.stringify(this.history));
        }
        return this.stack[0];
    }
}


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
            const tree = parser.crate();
            const generator = new RustEvaluatorBytecodeGenerator();
            generator.visit(tree);
            const ops = generator.ops;
            const vm = new RustEvaluatorVM();
            const result = vm.run(ops);
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
