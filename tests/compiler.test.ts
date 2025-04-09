import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "../src/parser/src/RustLexer";
import { RustParser } from "../src/parser/src/RustParser";
import { CompileError, RustCompiler } from "../src/RustCompiler";
import { RustVM } from "../src/RustVM";

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

describe('testing compiler', () => {
  it('testing 3+3, this should run, testing for setup errors.', () => {
    const code = `
      fn main() {
        3+3;
      }
    `;
    const result = runEvaluator(code);
    expect(result).toBe(6);
  });

  it('should throw CompileError for negating an integer (!3)', () => {
    const code = `
      fn main() {
        !3;
      }
    `;
    expect(() => runEvaluator(code)).toThrow(CompileError);
  });

  it('should throw CompileError for non-boolean if condition (if 3)', () => {
    const code = `
      fn main() {
        if 3 {
          1;
        } else {
          2;
        }
      }
    `;
    expect(() => runEvaluator(code)).toThrow(CompileError);
  });

  it('should throw CompileError for non-boolean while condition (while 3)', () => {
    const code = `
      fn main() {
        while 3 {
          1;
        }
      }
    `;
    expect(() => runEvaluator(code)).toThrow(CompileError);
  });

  it('should not throw for `while false`', () => {
    const code = `
      fn main() {
        while false {
          1;
        }
      }
    `;
    const result = runEvaluator(code);
    expect(result).toBe(0);
  });
  it('should not throw for `if true { … } else { … }`', () => {
    const code = `
      fn main() {
        if true {
          1;
        } else {
          2;
        }
      }
    `;
    const result = runEvaluator(code);
    expect(result).toBe(1);
  });
});
