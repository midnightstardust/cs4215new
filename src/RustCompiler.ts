import * as antlr from "antlr4ng";

import { AbstractParseTreeVisitor } from "antlr4ng";
import { RustParserVisitor } from "./parser/src/RustParserVisitor";
import { ArithmeticOrLogicalExpressionContext, AssignmentExpressionContext, BlockExpressionContext, CallExpressionContext, CallParamsContext, ComparisonExpressionContext, ComparisonOperatorContext, CrateContext, Function_Context, IdentifierContext, IfExpressionContext, LetStatementContext, LiteralExpressionContext, LoopExpressionContext, NegationExpressionContext, PathExpressionContext, PredicateLoopExpressionContext, ReturnExpressionContext, RustParser, StatementContext, StatementsContext } from "./parser/src/RustParser";
import { Instruction, InstructionType, UNDEFINED } from "./RustVM";

export class CompileError extends Error {
  public constructor(message?: string) {
    super(message);
  }
}

class Namespace {
  private stackOfFrames: Map<string, number>[];
  private stackOfStartingIndices: number[];
  public maxSize: number;

  constructor() {
    this.stackOfFrames = [new Map<string, number>()];
    this.stackOfStartingIndices = [0];
    this.maxSize = 0;
  }

  enterBlock(): void {
    this.stackOfStartingIndices.push(
      this.stackOfStartingIndices.at(-1) + this.stackOfFrames.at(-1).size
    );
    this.stackOfFrames.push(new Map<string, number>);
  }

  exitBlock(): void {
    this.stackOfStartingIndices.pop();
    this.stackOfFrames.pop();
  }

  getIdx(sym: string): number {
    for(let i = this.stackOfFrames.length - 1; i >= 0; --i) {
      if (this.stackOfFrames.at(i).has(sym)) {
        return this.stackOfFrames.at(i).get(sym);
      }
    }

    return -1;
  }

  addSym(sym: string): void {
    this.stackOfFrames.at(-1).set(
      sym, 
      this.stackOfStartingIndices.at(-1) + this.stackOfFrames.at(-1).size
    );

    this.maxSize = Math.max(
      this.maxSize, 
      this.stackOfStartingIndices.at(-1) + this.stackOfFrames.at(-1).size
    );
  }

  isSymInTopBlock(sym: string): boolean {
    return this.stackOfFrames.at(-1).has(sym);
  }
}

export class RustCompiler extends AbstractParseTreeVisitor<void> implements RustParserVisitor<void> {
  private instructions: Instruction[];
  private parser: RustParser;
  private functionNamespace: Map<string,number>[];
  private variableNamespace: Namespace[];
  private debug: boolean;

  private UNABLE_TO_EVAL_ERR(expr: antlr.ParserRuleContext): string {
    return `Unable to evaluate: ${expr.toStringTree(this.parser)}`;
  }

  private NOT_DECLARED_ERR(name: string): string {
    return `${name} not declared`;
  }

  private DUP_IDENTIFIER(name: string): string {
    return `duplicate identifier: ${name}`;
  }

  private getFunctionPC(name: string): number {
    for(let i = this.functionNamespace.length - 1; i >= 0; --i) {
      if (this.functionNamespace.at(i).has(name)) {
        return this.functionNamespace.at(i).get(name);
      }
    }
    return -1;
  }

  visitIfExpression(ctx: IfExpressionContext) {
    if (ctx.blockExpression().length !== 2) {
      throw new CompileError(this.UNABLE_TO_EVAL_ERR(ctx));
    }

    this.visit(ctx.expression());
    const jzInstruct = { type: InstructionType.JZ, operand: -1 };
    this.instructions.push(jzInstruct);

    this.visit(ctx.blockExpression(0));
    const jmpInstruct = { type: InstructionType.JMP, operand: -1 };
    this.instructions.push(jmpInstruct);
    jzInstruct.operand = this.instructions.length;

    this.visit(ctx.blockExpression(1));
    jmpInstruct.operand = this.instructions.length;
  }

  visitLoopExpression(ctx: LoopExpressionContext) {
    const child = ctx.predicateLoopExpression();
    if (child === null || child === undefined) {
      throw new CompileError(this.UNABLE_TO_EVAL_ERR(ctx));
    }
    this.visit(child);
  }

  visitPredicateLoopExpression(ctx: PredicateLoopExpressionContext) {
    const begin = this.instructions.length;

    this.visit(ctx.expression());
    const jzInstruct = { type: InstructionType.JZ, operand: -1 };
    this.instructions.push(jzInstruct);

    this.visit(ctx.blockExpression());
    this.instructions.push({ type: InstructionType.POP });
    this.instructions.push({ type: InstructionType.JMP, operand: begin });
    jzInstruct.operand = this.instructions.length;

    this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
  }

  visitNegationExpression(ctx: NegationExpressionContext) {
    if (ctx.MINUS() !== null) {
      this.instructions.push({ type: InstructionType.PUSH, operand: 0});
      this.visit(ctx.expression());
      this.instructions.push({ type: InstructionType.SUB });
    } else if (ctx.NOT() !== null) {
      this.visit(ctx.expression());
      this.instructions.push({ type: InstructionType.NOT });
    }
  }

  visitArithmeticOrLogicalExpression(ctx: ArithmeticOrLogicalExpressionContext) {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    
    if (ctx.PLUS() !== null) {
      this.instructions.push({ type: InstructionType.ADD });
    } else if (ctx.MINUS() !== null) {
      this.instructions.push({ type: InstructionType.SUB });
    } else if (ctx.STAR() !== null) {
      this.instructions.push({ type: InstructionType.MUL });
    } else if (ctx.SLASH() !== null) {
      this.instructions.push({ type: InstructionType.DIV });
    }
  }

  visitComparisonExpression(ctx: ComparisonExpressionContext) {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    this.visit(ctx.comparisonOperator());
  }

  visitComparisonOperator(ctx: ComparisonOperatorContext) {
    if (ctx.EQEQ() !== null) {
      this.instructions.push({ type: InstructionType.EQ });
    } else if (ctx.NE() !== null) {
      this.instructions.push({ type: InstructionType.NE });
    } else if (ctx.GT() !== null) {
      this.instructions.push({ type: InstructionType.GT });
    } else if (ctx.LT() !== null) {
      this.instructions.push({ type: InstructionType.LT });
    } else if (ctx.GE() !== null) {
      this.instructions.push({ type: InstructionType.GE });
    } else if (ctx.LE() !== null) {
      this.instructions.push({ type: InstructionType.LE });
    }
  }

  visitAssignmentExpression(ctx: AssignmentExpressionContext) {
    this.visit(ctx.expression(1));
    this.visit(ctx.expression(0));
    this.instructions.pop(); // remove load variable instruction
    this.instructions.push({ type: InstructionType.ASSIGN });
    this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
  }

  visitIdentifier(ctx: IdentifierContext) {
    const strIdentifier = ctx.NON_KEYWORD_IDENTIFIER();
    if (strIdentifier === null || strIdentifier === undefined) {
      throw new CompileError(this.UNABLE_TO_EVAL_ERR(ctx));
    }

    const sym = strIdentifier.getText();
    const idx = this.variableNamespace.at(-1).getIdx(sym);
    if (idx === -1) {
      throw new CompileError(this.NOT_DECLARED_ERR(sym));
    }

    this.instructions.push({ type: InstructionType.PUSH, operand: idx });
    this.instructions.push({ type: InstructionType.LOAD });
  }

  visitCallExpression(ctx: CallExpressionContext) {
    this.visit(ctx.callParams());

    const functionIdentifier = (ctx.expression().getChild(0) as PathExpressionContext).pathInExpression()?.pathExprSegment(0)?.pathIdentSegment()?.identifier()?.NON_KEYWORD_IDENTIFIER();
    if (functionIdentifier === null || functionIdentifier === undefined) {
      throw new CompileError(this.UNABLE_TO_EVAL_ERR(ctx));
    }
    const functionName = functionIdentifier.getText();
    const functionPC = this.getFunctionPC(functionName);
    if (functionPC === -1) {
      throw new CompileError(this.NOT_DECLARED_ERR(functionName));
    }

    this.instructions.push({ type: InstructionType.CALL, operand: functionPC });
  }

  visitReturnExpression(ctx: ReturnExpressionContext) {
    const expr = ctx.expression();
    if (expr === null || expr === undefined) {
      this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
    } else {
      this.visit(expr);
    }

    this.instructions.push({ type: InstructionType.RETURN });
  }

  visitLiteralExpression(ctx: LiteralExpressionContext) {
    if (ctx.KW_FALSE() !== null) {
      this.instructions.push({ type: InstructionType.PUSH, operand: 0 });
    } else if(ctx.KW_TRUE() !== null) {
      this.instructions.push({ type: InstructionType.PUSH, operand: 1 });
    } else if(ctx.INTEGER_LITERAL() !== null) {
      this.instructions.push({ type: InstructionType.PUSH, operand: parseInt(ctx.INTEGER_LITERAL().getText()) });
    }
  }

  visitStatements(ctx: StatementsContext) {
    for(const statement of ctx.statement()) {
      this.visit(statement);
      this.instructions.push({ type: InstructionType.POP });
    }
    this.instructions.pop();
  }

  visitStatement(ctx: StatementContext) {
    if (ctx.SEMI() !== null) {
      this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
    } else {
      this.visit(ctx.getChild(0) as antlr.ParseTree);
    } 
  }

  visitBlockExpression(ctx: BlockExpressionContext) {
    const statements = ctx.statements();
    if (statements === null || statements === undefined) {
      this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
    } else {
      this.functionNamespace.push(new Map<string, number>());
      this.variableNamespace.at(-1).enterBlock();

      this.visit(statements);

      this.functionNamespace.pop();
      this.variableNamespace.at(-1).exitBlock();
    }
  }

  visitLetStatement(ctx: LetStatementContext) {
    const identifier = ctx.patternNoTopAlt().patternWithoutRange()?.identifierPattern()?.identifier()?.NON_KEYWORD_IDENTIFIER();
    if (identifier === null || identifier === undefined) {
      throw new CompileError(this.UNABLE_TO_EVAL_ERR(ctx));
    }
    const variableName = identifier.getText();

    if (
      this.variableNamespace.at(-1).isSymInTopBlock(variableName) ||
      this.functionNamespace.at(-1).has(variableName)
    ) {
      throw new CompileError(this.DUP_IDENTIFIER(variableName));
    }

    this.variableNamespace.at(-1).addSym(variableName)

    if (ctx.expression() !== null) {
      this.visit(ctx.expression());
      this.instructions.push({ type: InstructionType.PUSH, operand: this.variableNamespace.at(-1).getIdx(variableName)});
      this.instructions.push({ type: InstructionType.ASSIGN });
    } 
    this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
  }

  visitFunction_(ctx: Function_Context) {
    const jmpInstruct = { type: InstructionType.JMP, operand: -1 };
    this.instructions.push(jmpInstruct);

    const functionIdentifier = ctx.identifier().NON_KEYWORD_IDENTIFIER();
    if (functionIdentifier === null || functionIdentifier === undefined) {
      throw new CompileError(this.UNABLE_TO_EVAL_ERR(ctx));
    }
    const functionName = functionIdentifier.getText();
    if (
      this.variableNamespace.at(-1).isSymInTopBlock(functionName) ||
      this.functionNamespace.at(-1).has(functionName)
    ) {
      throw new CompileError(this.DUP_IDENTIFIER(functionName));
    }

    this.functionNamespace.at(-1).set(functionName, this.instructions.length);

    this.variableNamespace.push(new Namespace());
    this.functionNamespace.push(new Map<string, number>());

    const newEnvInstruct = { type: InstructionType.ALLOCATE, operand: -1 };
    this.instructions.push(newEnvInstruct);
    if (ctx.functionParameters() !== null) {
      const params = ctx.functionParameters().functionParam();
      for(let i = params.length - 1; i >= 0; --i) {
        const varIdentifier = params[i].functionParamPattern()?.pattern()?.patternNoTopAlt(0)?.patternWithoutRange()?.identifierPattern()?.identifier()?.NON_KEYWORD_IDENTIFIER();
        if (varIdentifier === null || varIdentifier === undefined) {
          throw new CompileError(this.UNABLE_TO_EVAL_ERR(ctx));
        }
        const varName = varIdentifier.getText();
        if (this.variableNamespace.at(-1).isSymInTopBlock(varName)) {
          throw new CompileError(this.DUP_IDENTIFIER(varName));
        }
        this.variableNamespace.at(-1).addSym(varName);
        this.instructions.push( {type: InstructionType.PUSH, operand: this.variableNamespace.at(-1).getIdx(varName) });
        this.instructions.push({ type: InstructionType.ASSIGN });
      }
    }

    this.visit(ctx.blockExpression());
    this.instructions.push({ type: InstructionType.RETURN });

    jmpInstruct.operand = this.instructions.length;
    newEnvInstruct.operand = this.variableNamespace.at(-1).maxSize;

    this.functionNamespace.pop();
    this.variableNamespace.pop();

    this.instructions.push({ type: InstructionType.PUSH, operand: UNDEFINED });
  }

  visitCrate(ctx: CrateContext) {
    const items = ctx.item();
    if (items !== null) {
      for(const item of items) {
        this.visit(item);
        this.instructions.pop(); // remove push UNDEFINED at the end of function declarations
      }
    }
  }

  public compile(parser: RustParser, crate: CrateContext, debug: boolean): Instruction[] {
    this.parser = parser;
    this.instructions = [];
    this.debug = debug;
    this.variableNamespace = [new Namespace()];
    this.functionNamespace = [new Map<string, number>()];

    this.visit(crate);

    const mainPC = this.getFunctionPC('main');
    if (mainPC === -1) {
      throw new CompileError('main fn missing');
    }
    this.instructions.push({ type: InstructionType.CALL, operand: mainPC });
    this.instructions.push({ type: InstructionType.DONE });
    return this.instructions;
  }
}