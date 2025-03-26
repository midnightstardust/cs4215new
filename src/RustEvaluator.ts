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

class SimpleRustBytecodeGenerator extends AbstractParseTreeVisitor<void> implements RustVisitor<void> {
    public ops: Op[] = [];

    visitCrate(ctx: CrateContext): void {
        if (ctx.children) {
            for (const child of ctx.children) {
                const txt = child.getText();
                if (txt.startsWith("fnmain") || txt.startsWith("fn main")) {
                    for (let i = 0; i < child.getChildCount(); i++) {
                        const sub = child.getChild(i);
                        const subTxt = sub.getText();
                        if (subTxt.startsWith("{") && subTxt.endsWith("}")) {
                            const inner = subTxt.substring(1, subTxt.length - 1).trim();
                            const cleaned = inner.endsWith(";") ? inner.slice(0, -1) : inner;
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
        }
        if (ctx.getChildCount() > 0) {
            this.visit(ctx.getChild(0));
        }
    }

    visitExpression(ctx: ExpressionContext): void {
        const count = ctx.getChildCount();
        if (count === 1) {
            const num = parseInt(ctx.getText());
            this.ops.push({ type: OpType.PUSH, operand: num });
        } else if (count === 3) {
            if (ctx.getChild(0).getText() === "(" && ctx.getChild(2).getText() === ")") {
                this.visit(ctx.getChild(1) as ExpressionContext);
            } else {
                this.visit(ctx.getChild(0) as ExpressionContext);
                this.visit(ctx.getChild(2) as ExpressionContext);
                const opSym = ctx.getChild(1).getText();
                if (opSym === "+") {
                    this.ops.push({ type: OpType.ADD });
                } else if (opSym === "-") {
                    this.ops.push({ type: OpType.SUB });
                } else if (opSym === "*") {
                    this.ops.push({ type: OpType.MUL });
                } else if (opSym === "/") {
                    this.ops.push({ type: OpType.DIV });
                } else {
                    throw new Error(`Operator not supported: ${opSym}`);
                }
            }
        } else {
            throw new Error(`Expression structure error: ${ctx.getText()}`);
        }
    }

    protected defaultResult(): void { }
    protected aggregateResult(_agg: void, _next: void): void { }
}

class SimpleVM {
    private stack: number[] = [];
    run(ops: Op[]): number {
        for (const op of ops) {
            switch (op.type) {
                case OpType.PUSH:
                    if (op.operand === undefined) throw new Error("PUSH missing operand");
                    this.stack.push(op.operand);
                    break;
                case OpType.ADD: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) throw new Error("Stack underflow on ADD");
                    this.stack.push(a + b);
                    break;
                }
                case OpType.SUB: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) throw new Error("Stack underflow on SUB");
                    this.stack.push(a - b);
                    break;
                }
                case OpType.MUL: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) throw new Error("Stack underflow on MUL");
                    this.stack.push(a * b);
                    break;
                }
                case OpType.DIV: {
                    const b = this.stack.pop();
                    const a = this.stack.pop();
                    if (a === undefined || b === undefined) throw new Error("Stack underflow on DIV");
                    if (b === 0) throw new Error("Division by zero");
                    this.stack.push(a / b);
                    break;
                }
                default:
                    throw new Error(`Unknown op: ${op.type}`);
            }
        }
        if (this.stack.length === 0) {
            throw new Error("Stack is empty after execution");
        }
        return this.stack.pop()!;
    }
}


export class RustEvaluator extends BasicEvaluator {
    private counter = 0;
    constructor(plugin: IRunnerPlugin) {
        super(plugin);
    }
    async evaluateChunk(code: string): Promise<void> {
        this.counter++;
        try {
            const stream = CharStream.fromString(code);
            const lex = new RustLexer(stream);
            const tokens = new CommonTokenStream(lex);
            const par = new RustParser(tokens);
            const tree = par.crate();
            const generator = new SimpleRustBytecodeGenerator();
            generator.visit(tree);
            const ops = generator.ops;
            const vm = new SimpleVM();
            const res = vm.run(ops);
            this.conductor.sendOutput(`Result: ${res}`);
        } catch (e) {
            if (e instanceof Error) {
                this.conductor.sendOutput(`Error: ${e.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(e)}`);
            }
        }
    }
}
