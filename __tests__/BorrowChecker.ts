import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "../src/parser/src/RustLexer";
import { RustParser } from "../src/parser/src/RustParser";
import { BorrowChecker } from '../src/BorrowChecker';

const positiveTestCases: Array<[string, string]> = [
["Basic Case",
`
fn main() {
    let x : i32;
    x = 1;
    return;
}
`],

["Shadow variable",
`
fn main() {
    let x : i32;
    x = 1;
    {
        let x : i32;
        x = 2;
    }
    return;
}
`],
];

const negativeTestCases: Array<[string, string]> = [
["Use after move",
`
fn main() {
  let x : i32 = 1;
  let y : i32 = x;
  x;
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
  const borrow_checker_passed = borrow_checker.borrow_check(parser, tree, false);

  // console.log(`AST:\n${tree.toStringTree(parser)}`);

  return borrow_checker_passed;
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
