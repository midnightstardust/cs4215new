//Fair use declaration/citation: Refer to the readme.md.

import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { CrateContext, RustParser } from "./parser/src/RustParser";
import { BorrowChecker } from "./BorrowChecker";
import { CompileError, RustCompiler } from "./RustCompiler";
import { RustVM, VMError } from "./RustVM";
import { ConductorError } from "conductor/dist/common/errors";

const DEBUG = true;
export class RustEvaluator extends BasicEvaluator {
  constructor(plugin: IRunnerPlugin) {
    super(plugin);
  }

  parseCode(code: string): [CommonTokenStream, RustParser, CrateContext] {
    const input = CharStream.fromString(code);
    const lexer = new RustLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new RustParser(tokens);
    const tree = parser.crate();
    return [tokens, parser, tree];
  }

  async evaluateChunk(code: string): Promise<void> {
    try {
      const compiler = new RustCompiler();
      const vm = new RustVM();
      const [tokens, parser, tree] = this.parseCode(code);
      // this.conductor.sendOutput(`Crate Result:\n${tree.toStringTree(parser)}`);

      const borrow_checker = new BorrowChecker();
      const modifiedCode = borrow_checker.borrow_check(parser, tree, tokens, DEBUG);
      const [_, parserN, treeN] = this.parseCode(modifiedCode);

      const instructions = compiler.compile(parserN, treeN, DEBUG);
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
