import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "../src/parser/src/RustLexer";
import { RustParser } from "../src/parser/src/RustParser";
import { BorrowChecker } from '../src/BorrowChecker';

const positiveTestCases: Array<[string, string]> = [
["Basic Case",
`
fn main() {
    let x : Vec<i32>;
    x = vec![1, 2, 3];
    return;
}
`],

["Shadow variable",
`
fn main() {
    let x : Vec<i32>;
    x = vec![1, 2, 3];
    {
        let x : Vec<i32>;
        x = vec![4, 5, 6];
    }
    return;
}
`],

["Access correct shadow variable",
`
fn main() {
    let x : Vec<i32> = vec![1, 2, 3];
    {
        let x : Vec<i32> = vec![4, 5, 6];
        let y : Vec<i32> = x;
    }
    let y : Vec<i32> = x;
    return;
}
`],

["Function values",
`
fn foo() -> Vec<i32> { return vec![0, 1, 2]; }
fn main() {
    let x : Vec<i32> = foo();
    return;
}
`],

["Function call",
`
fn print(x: Vec<i32>) {}
fn main() {
    let x : Vec<i32> = vec![1, 2, 3];
    print(x);
    return;
}
`],

["Mutable variable",
`
fn main() {
    let mut x : Vec<i32> = vec![1, 2, 3];
    x = vec![4, 5, 6];
    x = vec![7, 8, 9];
    return;
}
`],

["Copy type",
`
fn main() {
    let x : i32 = 1;
    let y : i32 = x;
    x;
    return;
}
`],

["Assigning array index",
`
fn main() {
    let mut a : Vec<i32> = Vec::with_capacity(3);
    a[0] = 1;
    return;
}
`],

["Literal in function call",
`
fn main() {
    let mut a : Vec<i32>;
    a = Vec::with_capacity(3);
    a[0] = 1;
    display(a[0]);
    return;
}
`],

];

const negativeTestCases: Array<[string, string]> = [
["Multiple assign to immutable var",
`
fn main() {
    let x : Vec<i32>;
    x = vec![1, 2, 3];
    x = vec![4, 5, 6];
    return;
}
`],

["Accessing variable moved by assignment",
`
fn main() {
    let x : Vec<i32> = vec![1, 2, 3];
    let y : Vec<i32> = x;
    x;
    return;
}
`],

["Accessing variable moved by function call",
`
fn print(x: Vec<i32>) {}
fn main() {
    let x : Vec<i32> = vec![1, 2, 3];
    print(x);
    x;
    return;
}
`],

["Function call accessing moved variable",
`
fn print(x: Vec<i32>) {}
fn main() {
    let x : Vec<i32> = vec![1, 2, 3];
    let y : Vec<i32> = x;
    print(x);
    return;
}
`
],

["Assigning from un-declared variable",
`
fn main() {
    let x : Vec<i32> = y;
    return;
}
`
],

["Assigning from un-initialized variable",
`
fn main() {
    let y : Vec<i32>;
    let x : Vec<i32> = y;
    return;
}
`
],

["Function call moves variable",
`
fn foo(x: Vec<i32>) -> Vec<i32> { return x; }
fn main() {
    let x : Vec<i32> = vec![1, 2, 3];
    foo(x);
    x;
    return;
}
`
],

["Function call in assignment moves variable",
`
fn foo(x: Vec<i32>) -> Vec<i32> { return x; }
fn main() {
    let x : Vec<i32> = vec![1, 2, 3];
    let y : Vec<i32>;
    y = foo(x);
    x;
    return;
}
`
],

["Accessing moved array",
`
fn main() {
    let mut a : Vec<i32> = Vec::with_capacity(3);
    a[0] = 1;
    display(a[0]);
    a;
    return;
}
`],

];

function run_borrow_checker(code: string): boolean {
  const input = CharStream.fromString(code);
  const lexer = new RustLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new RustParser(tokens);

  const tree = parser.crate();
  const borrow_checker = new BorrowChecker();
  const _modifiedCode = borrow_checker.borrow_check(parser, tree, tokens, false);

  // console.log(`AST:\n${tree.toStringTree(parser)}`);

  return true;
}

describe('BorrowChecker Positive Cases', () => {
  positiveTestCases.forEach(([description, code]) => {
    it(`${description}`, () => {
      expect(run_borrow_checker(code)).toBe(true);
    });
  });
});

describe('BorrowChecker Negative Cases', () => {
  negativeTestCases.forEach(([description, code]) => {
    it(`${description}`, () => {
      expect(() => run_borrow_checker(code)).toThrow();
    });
  });
});
