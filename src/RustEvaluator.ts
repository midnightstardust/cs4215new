//Fair use declaration/citation: Refer to the readme.md.

import * as antlr from "antlr4ng";
import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream } from "antlr4ng";
import { RustLexer } from "./parser/src/RustLexer";
import { BlockExpressionContext, CrateContext, ExpressionContext, ExpressionStatementContext, ExpressionWithBlockContext, Function_Context, IdentifierContext, ItemContext, LetStatementContext, LiteralExpressionContext, PathExpressionContext, PatternNoTopAltContext, RustParser, StatementContext, StatementsContext } from "./parser/src/RustParser";

const DEBUG = true;
const UNDEFINED = "undefined";

enum InstructionType {
  PUSH = "PUSH",
  ADD = "ADD",
  SUB = "SUB",
  MUL = "MUL",
  DIV = "DIV",
  POP = "POP",
  ENTER = "ENTER",
  EXIT = "EXIT",
  LOAD = "LOAD",
  ASSIGN = "ASSIGN",
  LT = "LT",
  GT = "GT",
  EQ = "EQ",
  NE = "NE",
  LE = "LE",
  GE = "GE",
  NOT = "NOT",
  JMP = "JMP",
  JZ = "JZ",
  RETURN = "RETURN",
  CALL = "CALL",
  DONE = "DONE",
}

interface Instruction {
  type: InstructionType;
  operand?: any;
}

interface Fn_Object { params: string[]; pc: number;
}

const debug = (...s: any[]) => {
  if (DEBUG) {
    console.log(...s);
  }
};

class CompileError extends Error {
  public constructor(message?: string) {
    super(message);
  }
}

class VMError extends Error {
  public constructor(message?: string) {
    super(message);
  }
}

class RustCompiler {
  private instructions: Instruction[];
  private parser: RustParser;
  private binaryArithmeticTextToInstructionType: { [name: string]: InstructionType } = {
    "+": InstructionType.ADD,
    "-": InstructionType.SUB,
    "*": InstructionType.MUL,
    "/": InstructionType.DIV,
  };
  private envStack: Map<string, any>[];

  private isBinaryArithmeticOperation(expr: ExpressionContext) {
    return expr.getChildCount() === 3 && ["+", "-", "*", "/"].includes(expr.getChild(1).getText());
  }

  private isComparisonOperation(expr: ExpressionContext) {
    return expr.getChildCount() === 3 && ["<", ">", "==", "!=", "<=", ">="].includes(expr.getChild(1).getText());
  }

  private isUnaryNotOperation(expr: ExpressionContext) {
    return expr.getChildCount() === 2 && expr.getChild(0).getText() === "!";
  }

  private isBracketExpression(expr: ExpressionContext) {
    return expr.getChildCount() === 3 && expr.getChild(0).getText() === "(" && expr.getChild(2).getText() === ")";
  }

  private isAssignmentExpression(expr: ExpressionContext) {
    return expr.getChildCount() === 3 && expr.getChild(1).getText() === "=";
  }

  private inEnv(sym: string): boolean {
    return this.envStack.some((map) => map.has(sym));
  }

  private getNON_KEYWORD_IDENTIFIERFromPathExpression(expr: PathExpressionContext | null): antlr.TerminalNode | null {
    return expr?.pathInExpression()?.pathExprSegment(0)?.pathIdentSegment()?.identifier()?.NON_KEYWORD_IDENTIFIER();
  }

  private getNON_KEYWORD_IDENTIFIERFromPatternNoTopAlt(expr: PatternNoTopAltContext | null): antlr.TerminalNode | null {
    return expr?.patternWithoutRange()?.identifierPattern()?.identifier()?.NON_KEYWORD_IDENTIFIER();
  }

  private NOTDECLARED(name: string): string {
    return `${name} not declared`;
  }

  private UNABLETOEVAL(expr: antlr.ParserRuleContext): string {
    return `Unable to evaluate: ${expr.toStringTree(this.parser)}`;
  }

  private DUPLIDENTIFIER(name: string): string {
    return `duplicate identifier: ${name}`;
  }

  private visit(_expr: antlr.ParserRuleContext): void {
    if (_expr.ruleIndex === RustParser.RULE_ifExpression) {
      this.visit(_expr.getChild(1)); 
      const jzIndex = this.instructions.length;
      this.instructions.push({ type: InstructionType.JZ, operand: null });
      this.visit(_expr.getChild(2)); 
      if (_expr.getChildCount() > 3 && _expr.getChild(3).getText() === "else") {
        const jmpIndex = this.instructions.length;
        this.instructions.push({ type: InstructionType.JMP, operand: null });
        this.instructions[jzIndex].operand = this.instructions.length;
        this.visit(_expr.getChild(4)); 
        this.instructions[jmpIndex].operand = this.instructions.length;
      } else {
        this.instructions[jzIndex].operand = this.instructions.length;
      }
    } else if (_expr.ruleIndex === RustParser.RULE_expression) {
      const expr = _expr as ExpressionContext;
      if (this.isUnaryNotOperation(expr)) {
        this.visit(expr.getChild(1) as antlr.ParserRuleContext);
        this.instructions.push({ type: InstructionType.NOT });
      } else if (expr.getChildCount() === 1) {
        this.visit(expr.getChild(0) as antlr.ParserRuleContext);
      } else if (this.isBinaryArithmeticOperation(expr)) {
        this.visit(expr.getChild(0) as antlr.ParserRuleContext);
        this.visit(expr.getChild(2) as antlr.ParserRuleContext);
        const op = expr.getChild(1).getText();
        const instructType = this.binaryArithmeticTextToInstructionType[op];
        this.instructions.push({ type: instructType });
      } else if (this.isBracketExpression(expr)) {
        this.visit(expr.getChild(1) as antlr.ParserRuleContext);
      } else if (this.isComparisonOperation(expr)) {
        this.visit(expr.getChild(0) as antlr.ParserRuleContext);
        this.visit(expr.getChild(2) as antlr.ParserRuleContext);
        const op = expr.getChild(1).getText();
        if (op === "<") {
          this.instructions.push({ type: InstructionType.LT });
        } else if (op === ">") {
          this.instructions.push({ type: InstructionType.GT });
        } else if (op === "==") {
          this.instructions.push({ type: InstructionType.EQ });
        } else if (op === "!=") {
          this.instructions.push({ type: InstructionType.NE });
        } else if (op === "<=") {
          this.instructions.push({ type: InstructionType.LE });
        } else if (op === ">=") {
          this.instructions.push({ type: InstructionType.GE });
        }
      } else if (this.isAssignmentExpression(expr)) {
        this.visit(expr.getChild(2) as antlr.ParserRuleContext);
        const identifier = this.getNON_KEYWORD_IDENTIFIERFromPathExpression(
          (expr.getChild(0) as ExpressionContext).getChild(0) as PathExpressionContext
        );
        if (identifier === null || identifier === undefined) {
          throw new CompileError(this.UNABLETOEVAL(_expr));
        }
        const variableName = identifier.getText();
        if (!this.inEnv(variableName)) {
          throw new CompileError(this.NOTDECLARED(variableName));
        }
        this.instructions.push({ type: InstructionType.ASSIGN, operand: variableName });
        this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
      } else {
        throw new CompileError(this.UNABLETOEVAL(_expr));
      }
    } else if (_expr.ruleIndex === RustParser.RULE_literalExpression) {
      const expr = _expr as LiteralExpressionContext;
      const text = expr.getText();
      if (text === "true" || text === "false") {
        this.instructions.push({ type: InstructionType.PUSH, operand: text === "true" });
      } else {
        this.instructions.push({ type: InstructionType.PUSH, operand: parseInt(text) });
      }
    } else if (_expr.ruleIndex === RustParser.RULE_statements) {
      const expr = _expr as StatementsContext;
      for (const statement of expr.statement()) {
        this.visit(statement);
        this.instructions.push({ type: InstructionType.POP });
      }
      this.instructions.pop();
    } else if (_expr.ruleIndex === RustParser.RULE_statement) {
      const expr = _expr as StatementContext;
      if (expr.SEMI()) {
        this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
      } else {
        this.visit(expr.getChild(0) as antlr.ParserRuleContext);
      }
    } else if (_expr.ruleIndex === RustParser.RULE_expressionStatement) {
      const expr = _expr as ExpressionStatementContext;
      this.visit(expr.getChild(0) as antlr.ParserRuleContext);
    } else if (_expr.ruleIndex === RustParser.RULE_expressionWithBlock) {
      const expr = _expr as ExpressionWithBlockContext;
      this.visit(expr.getChild(expr.getChildCount() - 1) as antlr.ParserRuleContext);
    } else if (_expr.ruleIndex === RustParser.RULE_blockExpression) {
      const expr = _expr as BlockExpressionContext;
      const statements = expr.statements();
      if (statements) {
        const newEnv = new Map<string, any>();
        this.envStack.push(newEnv);
        this.instructions.push({ type: InstructionType.ENTER, operand: newEnv });
        this.visit(statements);
        this.envStack.pop();
        this.instructions.push({ type: InstructionType.EXIT })
      } else {
        this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
      }
    } else if (_expr.ruleIndex === RustParser.RULE_letStatement) {
      const expr = _expr as LetStatementContext;
      const variableNameIdentifier = this.getNON_KEYWORD_IDENTIFIERFromPatternNoTopAlt(expr.patternNoTopAlt());
      if (!variableNameIdentifier) {
        throw new CompileError(this.UNABLETOEVAL(_expr));
      }
      const variableName = variableNameIdentifier.getText();
      if (variableName === null || variableName === undefined) {
        throw new CompileError(this.UNABLETOEVAL(_expr));
      }
      if (this.envStack[this.envStack.length - 1].has(variableName)) {
        throw new CompileError(this.DUPLIDENTIFIER(variableName));
      }
      this.envStack[this.envStack.length - 1].set(variableName, UNDEFINED);
      this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
    } else if (_expr.ruleIndex === RustParser.RULE_pathExpression) {
      const expr = _expr as PathExpressionContext;
      const identifier = this.getNON_KEYWORD_IDENTIFIERFromPathExpression(expr);
      if (identifier === null || identifier === undefined) {
        throw new CompileError(this.UNABLETOEVAL(_expr));
      }
      const variableName = identifier.getText();
      if (!this.inEnv(variableName)) {
        throw new CompileError(this.NOTDECLARED(variableName));
      }
      this.instructions.push({ type: InstructionType.LOAD, operand: variableName });
    } else if(_expr.ruleIndex === RustParser.RULE_crate) {
      const expr = _expr as CrateContext;
      for(const item of expr.item()) {
        this.visit(item);
        // remove the 'push UNDEFINED' at the end of function declarations
        this.instructions.pop();
      }
    } else if(_expr.ruleIndex === RustParser.RULE_item) {
      const expr = _expr as ItemContext;

      // assume all items are functions
      const fn_expr = expr.visItem()?.function_();
      if (!fn_expr) {
        throw new CompileError(this.UNABLETOEVAL(_expr));
      }
      this.visit(fn_expr);

    }else if (_expr.ruleIndex === RustParser.RULE_function_) {
      const expr = _expr as Function_Context;

      const jmpInstruct = { type: InstructionType.JMP, operand: -1 };
      this.instructions.push(jmpInstruct);

      const functionIdentifier = expr.identifier().NON_KEYWORD_IDENTIFIER();
      if (!functionIdentifier) {
        throw new CompileError(this.UNABLETOEVAL(_expr));
      }
      const functionName = functionIdentifier.getText();
      if (this.envStack[this.envStack.length - 1].has(functionName)) {
        throw new CompileError(this.DUPLIDENTIFIER(functionName));
      }

      let params = expr.functionParameters()?.functionParam()?.map(param => {
        const param_identifier = this.getNON_KEYWORD_IDENTIFIERFromPatternNoTopAlt(param.functionParamPattern()?.pattern()?.patternNoTopAlt(0));
        if (!param_identifier) {
          throw new CompileError(this.UNABLETOEVAL(_expr));
        }
        return param_identifier.getText();
      })
      if (!params) {
        params = [];
      }
      const fnObj : Fn_Object = {params: params, pc: this.instructions.length };
      this.envStack[this.envStack.length - 1].set(functionName, fnObj);

      const prevEnvStack = this.envStack.slice();
      const blockExpression = expr.blockExpression();
      if (!blockExpression) {
        throw new CompileError(this.UNABLETOEVAL(_expr));
      }
      const new_env = new Map<string, any>();
      for(const param of params) {
        new_env.set(param, UNDEFINED);
      }
      this.envStack.push(new_env);
      this.visit(blockExpression);
      this.instructions.push({ type: InstructionType.RETURN });
      this.envStack = prevEnvStack;

      jmpInstruct.operand = this.instructions.length;
      this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
    } else {
      throw new CompileError(this.UNABLETOEVAL(_expr));
    }
  }

  public compile(parser: RustParser, crate: CrateContext): Instruction[] {
    this.parser = parser;
    this.envStack = [new Map<string, any>()];
    this.instructions = [{ type: InstructionType.ENTER, operand: this.envStack[0] }];
    this.visit(crate);
    this.instructions.push({ type: InstructionType.PUSH, operand: this.envStack[0].get('main') });
    this.instructions.push({ type: InstructionType.CALL, operand: 0});
    this.instructions.push({ type: InstructionType.DONE });
    return this.instructions;
  }
}

class SimpleVirtualMachine {
  private envs: Map<string, any>[];
  private stack: any[];

  private loadFromEnv(name: string): any {
    for (let i = this.envs.length - 1; i >= 0; i--) {
      const v = this.envs[i].get(name);
      if (v === UNDEFINED) {
        console.log(`VM WARNING: value is undefined`);
      }
      return v;
    }
    throw new VMError(`${name} is not declared`);
  }

  private assignToEnv(name: string, value: any) {
    for (let i = this.envs.length - 1; i >= 0; i--) {
      if (this.envs[i].has(name)) {
        this.envs[i].set(name, value);
        return;
      }
    }
    throw new VMError(`${name} is not declared`);
  }

  public execute(instructions: Instruction[]): any {
    this.stack = [];
    this.envs = [];
    let ip = 0;
    while (ip < instructions.length) {
      const instruct = instructions[ip];
      switch (instruct.type) {
        case InstructionType.PUSH: {
          if (instruct.operand === null || instruct.operand === undefined) {
            throw new VMError("PUSH missing operand");
          }
          this.stack.push(instruct.operand);
          break;
        }
        case InstructionType.ADD: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a + b);
          break;
        }
        case InstructionType.SUB: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a - b);
          break;
        }
        case InstructionType.MUL: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a * b);
          break;
        }
        case InstructionType.DIV: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          if (b === 0) {
            throw new VMError("Division by zero");
          }
          this.stack.push(Math.floor(a / b));
          break;
        }
        case InstructionType.LT: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a < b);
          break;
        }
        case InstructionType.GT: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a > b);
          break;
        }
        case InstructionType.EQ: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a === b);
          break;
        }
        case InstructionType.NE: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a !== b);
          break;
        }
        case InstructionType.LE: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a <= b);
          break;
        }
        case InstructionType.GE: {
          const b = this.stack.pop();
          const a = this.stack.pop();
          this.stack.push(a >= b);
          break;
        }
        case InstructionType.NOT: {
          const a = this.stack.pop();
          this.stack.push(!a);
          break;
        }
        case InstructionType.JMP: {
          ip = instruct.operand;
          continue;
        }
        case InstructionType.JZ: {
          const cond = this.stack.pop();
          if (!cond) {
            ip = instruct.operand;
            continue;
          }
          break;
        }
        case InstructionType.POP: {
          if (this.stack.length === 0) {
            throw new VMError("stack is empty");
          }
          this.stack.pop();
          break;
        }
        case InstructionType.ENTER: {
          if (instruct.operand === null || instruct.operand === undefined) {
            throw new VMError("ENTER missing operand");
          }
          this.envs.push(instruct.operand);
          break;
        }
        case InstructionType.EXIT: {
          this.envs.pop();
          break;
        }
        case InstructionType.LOAD: {
          this.stack.push(this.loadFromEnv(instruct.operand));
          break;
        }
        case InstructionType.ASSIGN: {
          const v = this.stack.pop();
          this.assignToEnv(instruct.operand, v);
          break;
        }
        default: {
          throw new VMError(`Unknown instruction type: ${instruct.type}`);
        }
      }
      ip++;
    }
    return this.stack.pop();
  }
}

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
      const tree = parser.crate();
      this.conductor.sendOutput(`Crate Result:\n${tree.toStringTree(parser)}`);
      const instructions = compiler.compile(parser, tree);
      debug(instructions);
      const vm = new SimpleVirtualMachine();
      const result = vm.execute(instructions);
      this.conductor.sendOutput(`Result:\n${result}`);
    } catch (error) {
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
