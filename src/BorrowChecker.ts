import * as antlr from "antlr4ng";
import { BlockExpressionContext, CrateContext, ExpressionContext, ExpressionStatementContext, LetStatementContext, PathExpressionContext, Function_Context, FunctionParamContext, CallParamsContext, RustParser } from "./parser/src/RustParser";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ng';

const DROP_FUNCTION = "__drop__";
const BUILTIN_FUNCTIONS = ["display"];
const COPY_TRAIT_TYPES = ["i32", "bool"];

function isCopyTraitType(type: string): boolean {
  return COPY_TRAIT_TYPES.includes(type);
}

class CheckerError extends Error {
  public constructor(message?: string) {
    super(message);
  }
}

class Value {
  private _copyTrait: boolean;
  private _dropped: boolean;

  public constructor(public type: string) {
    this._copyTrait = isCopyTraitType(type);
    this._dropped = false;
  }

  public hasCopyTrait(): boolean {
    return this._copyTrait;
  }

  public hasMoveTrait(): boolean {
    return !this._copyTrait;
  }

  public drop(): boolean {
    if (this.hasCopyTrait()) {
      return false;
    }
    if (this._dropped) {
      throw new CheckerError(`value of type ${this.type} has been dropped`);
    }
    this._dropped = true;
    return true;
  }
}

class Variable {
  private _name: string;
  private _mutable: boolean;
  private _value: Value | undefined;
  private _type: string;
  public assign_count: number;

  public constructor(name: string, mutable: boolean, type: string) {
    this._name = name;
    this._mutable = mutable;
    this._type = type;
    this._value = undefined;
    this.assign_count = 0;
  }

  public name(): string {
    return this._name;
  }

  public mutable(): boolean {
    return this._mutable;
  }

  public type(): string {
    return this._type;
  }

  public hasOwnedValue(): boolean {
    return this._value !== undefined;
  }

  public moveOwnedValue(newVar: Variable) {
    if (this._value === undefined) {
      if (this.assign_count === 0) {
        throw new CheckerError("variable has not been initialized");
      }
      throw new CheckerError("value has already been moved");
    }
    newVar.assignValue(this._value);
    if (this._value.hasMoveTrait()) {
      this._value = undefined;
    }
  }

  public tryDropOwnedValue(): boolean {
    if (this._value === undefined) {
      return false;
    }
    const value = this._value;
    this._value = undefined;
    return value.drop();
  }

  public dropOwnedValue(): void {
    if (this._value === undefined) {
      throw new CheckerError("value has already been moved");
    }
    this._value.drop();
    this._value = undefined;
  }

  public assignValue(value: Value): void {
    if (!this.mutable() && this.assign_count >= 1) {
      throw new CheckerError(`cannot assign to immutable variable ${this._name} more than once`);
    }
    this._value = value;
    this.assign_count++;
  }

  public toString(): string {
    if (this._value === undefined) {
      return `Variable(${this._name}, ${this._mutable}, ${this._type}, null)`;
    }
    return `Variable(${this._name}, ${this._mutable}, ${this._type}, owned)`;
  }
}

export class BorrowChecker extends AbstractParseTreeVisitor<boolean> implements RustParserVisitor<boolean> {
  private debug: boolean;
  private parser: RustParser;
  private envStack: Map<string, Variable>[];
  private functions: Set<string>;
  private rewriter: antlr.TokenStreamRewriter;

  private isAssignmentExpression(expr: ExpressionContext) {
    if (expr === null) {
      return false;
    }
    return expr.getChildCount() === 3 && expr.getChild(1).getText() === "=";
  }

  private isFunctionCallWithParams(expr: ExpressionContext) {
    if (expr === null) {
      return false;
    }
    return expr.getChildCount() === 4
        && expr.getChild(1).getText() === "("
        && expr.getChild(3).getText() === ")";
  }

  private NOTDECLARED(name: string): string {
    return `${name} not declared`;
  }

  private DUPLIDENTIFIER(name: string): string {
    return `duplicate identifier: ${name}`;
  }

  private get_curr_env(): Map<string, Variable> {
    return this.envStack[this.envStack.length - 1];
  }

  private strict_lookup(name: string): Variable {
    for (let i = this.envStack.length - 1; i >= 0; i--) {
      const env = this.envStack[i];
      if (env.has(name)) {
        return env.get(name);
      }
    }
    throw new CheckerError(this.NOTDECLARED(name));
  }

  private lookup(name: string): Variable | undefined {
    for (let i = this.envStack.length - 1; i >= 0; i--) {
      const env = this.envStack[i];
      if (env.has(name)) {
        return env.get(name);
      }
    }
    return undefined;
  }

  private debug_print_env() {
    if (!this.debug) {
      return;
    }
    console.log("============variables============");
    for (let i = 0; i < this.envStack.length; i++) {
      console.log(`env ${i}`);
      for (const [key, value] of this.envStack[i]) {
        console.log(`${key} : ${value.toString()}`);
      }
    }
  }

  private debug_print(message: string) {
    if (!this.debug) {
      return;
    }
    console.log(message);
  }

  visitFunction_(ctx: Function_Context): boolean {
    const functionName = ctx.identifier().NON_KEYWORD_IDENTIFIER().getText();
    this.debug_print(`function: ${functionName}`);
    this.envStack.push(new Map<string, Variable>());
    this.functions.add(functionName);
    if (ctx.functionParameters() !== null) {
      this.visit(ctx.functionParameters());
      this.debug_print_env();
    }
    this.visit(ctx.blockExpression());
    const lastEnv = this.envStack.pop();
    this.insertDropForEnv(lastEnv, ctx.blockExpression());
    return true;
  }

  visitFunctionParam(ctx: FunctionParamContext): boolean {
    const paramName = ctx.functionParamPattern().pattern().patternNoTopAlt()[0].patternWithoutRange().identifierPattern().identifier().NON_KEYWORD_IDENTIFIER().getText();
    const mutable = ctx.functionParamPattern().pattern().patternNoTopAlt()[0].patternWithoutRange().identifierPattern().KW_MUT() !== null;
    const type = ctx.functionParamPattern().type_().typeNoBounds().traitObjectTypeOneBound().traitBound().typePath().getText();
    const variable = new Variable(paramName, mutable, type);
    this.get_curr_env().set(paramName, variable);
    variable.assignValue(new Value(type));
    return true;
  }

  visitLetStatement(ctx: LetStatementContext): boolean {
    const variableName = ctx.patternNoTopAlt().patternWithoutRange()?.identifierPattern()?.identifier()?.NON_KEYWORD_IDENTIFIER()?.getText();
    if (this.get_curr_env().has(variableName)) {
      throw new CheckerError(this.DUPLIDENTIFIER(variableName));
    }
    const mutable = ctx.patternNoTopAlt().patternWithoutRange()?.identifierPattern().KW_MUT() !== null;
    const type = ctx.type_()?.typeNoBounds()?.traitObjectTypeOneBound()?.traitBound()?.typePath()?.getText();
    if (ctx.expression() === null) {
      this.get_curr_env().set(variableName, new Variable(variableName, mutable, type));
      this.debug_print_env();
      return true;
    }
    let child_expr = ctx.expression().getChild(0) as antlr.ParserRuleContext;
    if (child_expr.ruleIndex === RustParser.RULE_pathExpression) {
      const path = child_expr as PathExpressionContext;
      const source_variable = this.strict_lookup(path.getText());
      const variable = new Variable(variableName, mutable, type);
      source_variable.moveOwnedValue(variable);
      this.get_curr_env().set(variableName, variable);
    } else {
      this.visit(child_expr);
      const variable = new Variable(variableName, mutable, type);
      variable.assignValue(new Value(type));
      this.get_curr_env().set(variableName, variable);

    }
    this.debug_print_env();
    return true;
  }

  visitExpressionStatement(ctx: ExpressionStatementContext): boolean {
    const expr = ctx.expression();
    if (this.isAssignmentExpression(expr)) {
      const path_expr = expr.getChild(0) as PathExpressionContext;
      const variableName = path_expr.getText();
      const variable = this.strict_lookup(variableName);
      const child_expr = (expr.getChild(2) as ExpressionContext).getChildCount() > 1
                        ? (expr.getChild(2) as ExpressionContext)
                        : (expr.getChild(2) as ExpressionContext).getChild(0) as antlr.ParserRuleContext;
      if (child_expr.ruleIndex === RustParser.RULE_pathExpression) {
        this.debug_print(`child_expr_path: ${child_expr.getText()}`);
        this.debug_print(`ctx: ${child_expr.toStringTree(this.parser)}`);
        const path = child_expr as PathExpressionContext;
        const source_variable = this.strict_lookup(path.getText());
        if (variable.hasOwnedValue() && !isCopyTraitType(variable.type())) {
          const dropCode = `${DROP_FUNCTION}(${variableName});\n`;
          this.rewriter.insertBefore(expr.start, dropCode);
        }
        source_variable.moveOwnedValue(variable);
      } else {
        this.debug_print(`child_expr_else: ${child_expr.getText()}`);
        this.debug_print(`ctx: ${child_expr.toStringTree(this.parser)}`);
        this.visit(child_expr);
        if (variable.tryDropOwnedValue()) {
          const dropCode = `${DROP_FUNCTION}(${variableName});\n`;
          this.rewriter.insertBefore(expr.start, dropCode);
        }
        variable.assignValue(new Value(variable.type()));
      }
      this.debug_print_env();
    } else if (this.isFunctionCallWithParams(expr)) {
      this.debug_print(`function call: ${expr.getText()}`);
      const path_expr = expr.getChild(0) as PathExpressionContext;
      const call_params = expr.getChild(2) as CallParamsContext;
      const functionName = path_expr.getText();
      if (!this.functions.has(functionName)) {
        throw new CheckerError(this.NOTDECLARED(functionName));
      }
      this.visitCallParams(call_params);
    } else if (ctx.getChildCount() > 0) {
      this.visitChildren(ctx);
    }
    return true;
  }

  visitCallParams(ctx: CallParamsContext): boolean {
    ctx.expression().forEach((param) => {
      this.debug_print(`param: ${param.getText()}`);
      this.debug_print(`ctx: ${param.toStringTree(this.parser)}`);
      const source_variable = this.strict_lookup(param.getText());
      source_variable.dropOwnedValue();
    });
    return true;
  }

  visitPathExpression(ctx: PathExpressionContext): boolean {
    this.debug_print(`path: ${ctx.toStringTree(this.parser)}`);
    const variableName = ctx.getText();
    const variable = this.lookup(variableName);
    if (variable !== undefined) {
      if (!variable.hasOwnedValue()) {
        throw new CheckerError(`access of moved value: ${variableName}`);
      }
    }
    if (variable !== null) {
      return true;
    }
    const isFunction = this.functions.has(variableName);
    if (!isFunction) {
      throw new CheckerError(this.NOTDECLARED(variableName));
    }
    this.visitChildren(ctx);
    return true;
  }

  visitBlockExpression(ctx: BlockExpressionContext): boolean {
    this.debug_print("enter block");
    const statements = ctx.statements();
    if (statements) {
      this.envStack.push(new Map<string, Variable>());
      this.visit(statements);
      const lastEnv = this.envStack.pop();
      this.insertDropForEnv(lastEnv, ctx);
    }
    this.debug_print("exit block");
    return true;
  }

  insertDropForEnv(env: Map<string, Variable>, ctx: BlockExpressionContext): void {
    let dropsToInsert = "";
    for (const [_, variable] of env) {
      if (variable.tryDropOwnedValue()) {
        dropsToInsert += `${DROP_FUNCTION}(${variable.name()});\n`;
      }
    }
    if (dropsToInsert.length !== 0) {
      const stopToken = ctx.stop;
      if (stopToken) {
        this.rewriter.insertBefore(stopToken.tokenIndex, dropsToInsert);
      } else {
        throw new CheckerError("Could not find stop token for block to insert drops");
      }
    }
  }

  public borrow_check(parser: RustParser, crate: CrateContext, tokens: antlr.CommonTokenStream, debug: boolean): string {
    this.parser = parser;
    this.debug = debug;
    this.envStack = [];
    this.functions = new Set<string>(BUILTIN_FUNCTIONS);
    this.rewriter = new antlr.TokenStreamRewriter(tokens);
    this.visit(crate)
    const modifiedCode = this.rewriter.getText();
    return modifiedCode;
  }
}
