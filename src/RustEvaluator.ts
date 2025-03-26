//Fair use declaration/citation: Refer to the readme.md.

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { RustParser } from "./parser/src/RustParser";

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

            this.conductor.sendOutput(Result:\n${tree.toStringTree(parser)});
        } catch (error) {
            if (error instanceof Error) {
                this.conductor.sendOutput(Error: ${error.message});
            } else {
                this.conductor.sendOutput(Error: ${String(error)});
            }
        }
    }
}
