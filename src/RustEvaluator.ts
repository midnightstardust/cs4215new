//Fair use declaration/citation: Refer to the readme.md.

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { RustParser } from "./parser/src/RustParser";
import { CompileError, RustCompiler } from "./RustCompiler";
import { RustVM, VMError } from "./RustVM";
import { ConductorError } from "conductor/dist/common/errors";

const DEBUG = true;
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
      const vm = new RustVM();
      const tree = parser.crate();
      // this.conductor.sendOutput(`Crate Result:\n${tree.toStringTree(parser)}`);

      const instructions = compiler.compile(parser, tree, DEBUG);
      vm.run(instructions, this.conductor, DEBUG);
      this.conductor.sendOutput("Evaluation completed!");
    } catch (error) {
    //  console.log(error);
      if (error instanceof CompileError) {
        this.conductor.sendOutput(`Compile Error: ${error.message}`);
      } else if (error instanceof VMError) {
        this.conductor.sendOutput(`VM execution Error: ${error.message}`);
      } else if (error instanceof Error) {
        this.conductor.sendOutput(`Error: ${error.message}`);
      } else {
        this.conductor.sendOutput(`Error: ${String(error)}`);
      }
    }
  }
}
