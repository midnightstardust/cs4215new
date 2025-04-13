import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "../src/parser/src/RustLexer";
import { RustParser } from "../src/parser/src/RustParser";
import { CompileError, RustCompiler } from "../src/RustCompiler";
import { RustVM } from "../src/RustVM";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";


// note that the display function does not work
function runEvaluator(code: string): any {
  const input = CharStream.fromString(code);
  const lexer = new RustLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new RustParser(tokens);
  const compiler = new RustCompiler();
  const vm = new RustVM();

  const tree = parser.crate();
  const DEBUG = false;
  const instructions = compiler.compile(parser, tree, DEBUG);
  const result = vm.run(instructions, null as IRunnerPlugin, DEBUG);
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

  it('recursive function calls should work', () => {
    const code = `
      fn fact(n: i32) {
        if n == 0 {
          1;
        } else {
          n * fact(n - 1);
        }
      }

      fn main() {
        fact(5);
      }
    `;

    const result = runEvaluator(code);
    expect(result).toBe(120);
  });

  it('nested function calls should work', () => {
    const code = `
      fn f() {
        1;
      }
      
      fn g() {
        f();
      }
      
      fn main() {
        g();
      }
    `;
    
    const result = runEvaluator(code);
    expect(result).toBe(1);
  });

  it('function calls arguments should be correctly ordered', () => {
    const code = `
      fn f(a: i32, b: i32) {
        a;
      }
      
      fn main() {
        f(1, 2);
      }
    `;

    const result = runEvaluator(code);
    expect(result).toBe(1);
  });

  it('function calls should evaluate correctly', () => {
    const code = `
      fn f(n: i32) {
        n;
      }
      
      fn main() {
        f(1 + 2 * 3);
      }
    `;

    const result = runEvaluator(code);
    expect(result).toBe(7);
  });

  it('variable declarations should return the correct value', () => {
    const code = `
      fn main() {
        let a = 1;
        let b = 2;
        a;
      }
    `;

    const result = runEvaluator(code);
    expect(result).toBe(1);
  });

  it('assignment operator works', () => {
    const code = `
      fn main() {
        let a = 1;
        a = a + 1;
        a;
      }
    `;

    const result = runEvaluator(code);
    expect(result).toBe(2);
  })
});
