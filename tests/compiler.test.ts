import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "../src/parser/src/RustLexer";
import { RustParser } from "../src/parser/src/RustParser";
import { CompileError, RustCompiler } from "../src/RustCompiler";
import { RustVM, VMError } from "../src/RustVM";

function runEvaluator(code: string): any {
  const input = CharStream.fromString(code);
  const lexer = new RustLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new RustParser(tokens);
  const compiler = new RustCompiler();
  const vm = new RustVM();

  const tree = parser.crate();
  const DEBUG = true;
  const instructions = compiler.compile(parser, tree, DEBUG);
  const result = vm.run(instructions, DEBUG);
  return result;
}

describe('Rust Evaluator - Simple Arithmetic', () => {
  it('should evaluate "3+3" to 6', () => {
    const code = `
      fn main() {
        3+3;
      }
    `;
    const result = runEvaluator(code);
    expect(result).toBe(6);
  });
});
