// Generated from src/RustParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { CrateContext } from "./RustParser.js";
import { MacroInvocationContext } from "./RustParser.js";
import { DelimTokenTreeContext } from "./RustParser.js";
import { TokenTreeContext } from "./RustParser.js";
import { TokenTreeTokenContext } from "./RustParser.js";
import { MacroInvocationSemiContext } from "./RustParser.js";
import { MacroRulesDefinitionContext } from "./RustParser.js";
import { MacroRulesDefContext } from "./RustParser.js";
import { MacroRulesContext } from "./RustParser.js";
import { MacroRuleContext } from "./RustParser.js";
import { MacroMatcherContext } from "./RustParser.js";
import { MacroMatchContext } from "./RustParser.js";
import { MacroMatchTokenContext } from "./RustParser.js";
import { MacroFragSpecContext } from "./RustParser.js";
import { MacroRepSepContext } from "./RustParser.js";
import { MacroRepOpContext } from "./RustParser.js";
import { MacroTranscriberContext } from "./RustParser.js";
import { ItemContext } from "./RustParser.js";
import { VisItemContext } from "./RustParser.js";
import { MacroItemContext } from "./RustParser.js";
import { ModuleContext } from "./RustParser.js";
import { ExternCrateContext } from "./RustParser.js";
import { CrateRefContext } from "./RustParser.js";
import { AsClauseContext } from "./RustParser.js";
import { UseDeclarationContext } from "./RustParser.js";
import { UseTreeContext } from "./RustParser.js";
import { Function_Context } from "./RustParser.js";
import { FunctionQualifiersContext } from "./RustParser.js";
import { AbiContext } from "./RustParser.js";
import { FunctionParametersContext } from "./RustParser.js";
import { SelfParamContext } from "./RustParser.js";
import { ShorthandSelfContext } from "./RustParser.js";
import { TypedSelfContext } from "./RustParser.js";
import { FunctionParamContext } from "./RustParser.js";
import { FunctionParamPatternContext } from "./RustParser.js";
import { FunctionReturnTypeContext } from "./RustParser.js";
import { TypeAliasContext } from "./RustParser.js";
import { Struct_Context } from "./RustParser.js";
import { StructStructContext } from "./RustParser.js";
import { TupleStructContext } from "./RustParser.js";
import { StructFieldsContext } from "./RustParser.js";
import { StructFieldContext } from "./RustParser.js";
import { TupleFieldsContext } from "./RustParser.js";
import { TupleFieldContext } from "./RustParser.js";
import { EnumerationContext } from "./RustParser.js";
import { EnumItemsContext } from "./RustParser.js";
import { EnumItemContext } from "./RustParser.js";
import { EnumItemTupleContext } from "./RustParser.js";
import { EnumItemStructContext } from "./RustParser.js";
import { EnumItemDiscriminantContext } from "./RustParser.js";
import { Union_Context } from "./RustParser.js";
import { ConstantItemContext } from "./RustParser.js";
import { StaticItemContext } from "./RustParser.js";
import { Trait_Context } from "./RustParser.js";
import { ImplementationContext } from "./RustParser.js";
import { InherentImplContext } from "./RustParser.js";
import { TraitImplContext } from "./RustParser.js";
import { ExternBlockContext } from "./RustParser.js";
import { ExternalItemContext } from "./RustParser.js";
import { GenericParamsContext } from "./RustParser.js";
import { GenericParamContext } from "./RustParser.js";
import { LifetimeParamContext } from "./RustParser.js";
import { TypeParamContext } from "./RustParser.js";
import { ConstParamContext } from "./RustParser.js";
import { WhereClauseContext } from "./RustParser.js";
import { WhereClauseItemContext } from "./RustParser.js";
import { LifetimeWhereClauseItemContext } from "./RustParser.js";
import { TypeBoundWhereClauseItemContext } from "./RustParser.js";
import { ForLifetimesContext } from "./RustParser.js";
import { AssociatedItemContext } from "./RustParser.js";
import { InnerAttributeContext } from "./RustParser.js";
import { OuterAttributeContext } from "./RustParser.js";
import { AttrContext } from "./RustParser.js";
import { AttrInputContext } from "./RustParser.js";
import { StatementContext } from "./RustParser.js";
import { LetStatementContext } from "./RustParser.js";
import { ExpressionStatementContext } from "./RustParser.js";
import { TypeCastExpressionContext } from "./RustParser.js";
import { PathExpression_Context } from "./RustParser.js";
import { TupleExpressionContext } from "./RustParser.js";
import { IndexExpressionContext } from "./RustParser.js";
import { RangeExpressionContext } from "./RustParser.js";
import { MacroInvocationAsExpressionContext } from "./RustParser.js";
import { ReturnExpressionContext } from "./RustParser.js";
import { AwaitExpressionContext } from "./RustParser.js";
import { ErrorPropagationExpressionContext } from "./RustParser.js";
import { ContinueExpressionContext } from "./RustParser.js";
import { AssignmentExpressionContext } from "./RustParser.js";
import { MethodCallExpressionContext } from "./RustParser.js";
import { LiteralExpression_Context } from "./RustParser.js";
import { StructExpression_Context } from "./RustParser.js";
import { TupleIndexingExpressionContext } from "./RustParser.js";
import { NegationExpressionContext } from "./RustParser.js";
import { CallExpressionContext } from "./RustParser.js";
import { LazyBooleanExpressionContext } from "./RustParser.js";
import { DereferenceExpressionContext } from "./RustParser.js";
import { ExpressionWithBlock_Context } from "./RustParser.js";
import { GroupedExpressionContext } from "./RustParser.js";
import { BreakExpressionContext } from "./RustParser.js";
import { ArithmeticOrLogicalExpressionContext } from "./RustParser.js";
import { FieldExpressionContext } from "./RustParser.js";
import { EnumerationVariantExpression_Context } from "./RustParser.js";
import { ComparisonExpressionContext } from "./RustParser.js";
import { AttributedExpressionContext } from "./RustParser.js";
import { BorrowExpressionContext } from "./RustParser.js";
import { CompoundAssignmentExpressionContext } from "./RustParser.js";
import { ClosureExpression_Context } from "./RustParser.js";
import { ArrayExpressionContext } from "./RustParser.js";
import { ComparisonOperatorContext } from "./RustParser.js";
import { CompoundAssignOperatorContext } from "./RustParser.js";
import { ExpressionWithBlockContext } from "./RustParser.js";
import { LiteralExpressionContext } from "./RustParser.js";
import { PathExpressionContext } from "./RustParser.js";
import { BlockExpressionContext } from "./RustParser.js";
import { StatementsContext } from "./RustParser.js";
import { AsyncBlockExpressionContext } from "./RustParser.js";
import { UnsafeBlockExpressionContext } from "./RustParser.js";
import { ArrayElementsContext } from "./RustParser.js";
import { TupleElementsContext } from "./RustParser.js";
import { TupleIndexContext } from "./RustParser.js";
import { StructExpressionContext } from "./RustParser.js";
import { StructExprStructContext } from "./RustParser.js";
import { StructExprFieldsContext } from "./RustParser.js";
import { StructExprFieldContext } from "./RustParser.js";
import { StructBaseContext } from "./RustParser.js";
import { StructExprTupleContext } from "./RustParser.js";
import { StructExprUnitContext } from "./RustParser.js";
import { EnumerationVariantExpressionContext } from "./RustParser.js";
import { EnumExprStructContext } from "./RustParser.js";
import { EnumExprFieldsContext } from "./RustParser.js";
import { EnumExprFieldContext } from "./RustParser.js";
import { EnumExprTupleContext } from "./RustParser.js";
import { EnumExprFieldlessContext } from "./RustParser.js";
import { CallParamsContext } from "./RustParser.js";
import { ClosureExpressionContext } from "./RustParser.js";
import { ClosureParametersContext } from "./RustParser.js";
import { ClosureParamContext } from "./RustParser.js";
import { LoopExpressionContext } from "./RustParser.js";
import { InfiniteLoopExpressionContext } from "./RustParser.js";
import { PredicateLoopExpressionContext } from "./RustParser.js";
import { PredicatePatternLoopExpressionContext } from "./RustParser.js";
import { IteratorLoopExpressionContext } from "./RustParser.js";
import { LoopLabelContext } from "./RustParser.js";
import { IfExpressionContext } from "./RustParser.js";
import { IfLetExpressionContext } from "./RustParser.js";
import { MatchExpressionContext } from "./RustParser.js";
import { MatchArmsContext } from "./RustParser.js";
import { MatchArmExpressionContext } from "./RustParser.js";
import { MatchArmContext } from "./RustParser.js";
import { MatchArmGuardContext } from "./RustParser.js";
import { PatternContext } from "./RustParser.js";
import { PatternNoTopAltContext } from "./RustParser.js";
import { PatternWithoutRangeContext } from "./RustParser.js";
import { LiteralPatternContext } from "./RustParser.js";
import { IdentifierPatternContext } from "./RustParser.js";
import { WildcardPatternContext } from "./RustParser.js";
import { RestPatternContext } from "./RustParser.js";
import { InclusiveRangePatternContext } from "./RustParser.js";
import { HalfOpenRangePatternContext } from "./RustParser.js";
import { ObsoleteRangePatternContext } from "./RustParser.js";
import { RangePatternBoundContext } from "./RustParser.js";
import { ReferencePatternContext } from "./RustParser.js";
import { StructPatternContext } from "./RustParser.js";
import { StructPatternElementsContext } from "./RustParser.js";
import { StructPatternFieldsContext } from "./RustParser.js";
import { StructPatternFieldContext } from "./RustParser.js";
import { StructPatternEtCeteraContext } from "./RustParser.js";
import { TupleStructPatternContext } from "./RustParser.js";
import { TupleStructItemsContext } from "./RustParser.js";
import { TuplePatternContext } from "./RustParser.js";
import { TuplePatternItemsContext } from "./RustParser.js";
import { GroupedPatternContext } from "./RustParser.js";
import { SlicePatternContext } from "./RustParser.js";
import { SlicePatternItemsContext } from "./RustParser.js";
import { PathPatternContext } from "./RustParser.js";
import { Type_Context } from "./RustParser.js";
import { TypeNoBoundsContext } from "./RustParser.js";
import { ParenthesizedTypeContext } from "./RustParser.js";
import { NeverTypeContext } from "./RustParser.js";
import { TupleTypeContext } from "./RustParser.js";
import { ArrayTypeContext } from "./RustParser.js";
import { SliceTypeContext } from "./RustParser.js";
import { ReferenceTypeContext } from "./RustParser.js";
import { RawPointerTypeContext } from "./RustParser.js";
import { BareFunctionTypeContext } from "./RustParser.js";
import { FunctionTypeQualifiersContext } from "./RustParser.js";
import { BareFunctionReturnTypeContext } from "./RustParser.js";
import { FunctionParametersMaybeNamedVariadicContext } from "./RustParser.js";
import { MaybeNamedFunctionParametersContext } from "./RustParser.js";
import { MaybeNamedParamContext } from "./RustParser.js";
import { MaybeNamedFunctionParametersVariadicContext } from "./RustParser.js";
import { TraitObjectTypeContext } from "./RustParser.js";
import { TraitObjectTypeOneBoundContext } from "./RustParser.js";
import { ImplTraitTypeContext } from "./RustParser.js";
import { ImplTraitTypeOneBoundContext } from "./RustParser.js";
import { InferredTypeContext } from "./RustParser.js";
import { TypeParamBoundsContext } from "./RustParser.js";
import { TypeParamBoundContext } from "./RustParser.js";
import { TraitBoundContext } from "./RustParser.js";
import { LifetimeBoundsContext } from "./RustParser.js";
import { LifetimeContext } from "./RustParser.js";
import { SimplePathContext } from "./RustParser.js";
import { SimplePathSegmentContext } from "./RustParser.js";
import { PathInExpressionContext } from "./RustParser.js";
import { PathExprSegmentContext } from "./RustParser.js";
import { PathIdentSegmentContext } from "./RustParser.js";
import { GenericArgsContext } from "./RustParser.js";
import { GenericArgContext } from "./RustParser.js";
import { GenericArgsConstContext } from "./RustParser.js";
import { GenericArgsLifetimesContext } from "./RustParser.js";
import { GenericArgsTypesContext } from "./RustParser.js";
import { GenericArgsBindingsContext } from "./RustParser.js";
import { GenericArgsBindingContext } from "./RustParser.js";
import { QualifiedPathInExpressionContext } from "./RustParser.js";
import { QualifiedPathTypeContext } from "./RustParser.js";
import { QualifiedPathInTypeContext } from "./RustParser.js";
import { TypePathContext } from "./RustParser.js";
import { TypePathSegmentContext } from "./RustParser.js";
import { TypePathFnContext } from "./RustParser.js";
import { TypePathInputsContext } from "./RustParser.js";
import { VisibilityContext } from "./RustParser.js";
import { IdentifierContext } from "./RustParser.js";
import { KeywordContext } from "./RustParser.js";
import { MacroIdentifierLikeTokenContext } from "./RustParser.js";
import { MacroLiteralTokenContext } from "./RustParser.js";
import { MacroPunctuationTokenContext } from "./RustParser.js";
import { ShlContext } from "./RustParser.js";
import { ShrContext } from "./RustParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RustParser`.
 */
export class RustParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `RustParser.crate`.
     * @param ctx the parse tree
     */
    enterCrate?: (ctx: CrateContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.crate`.
     * @param ctx the parse tree
     */
    exitCrate?: (ctx: CrateContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroInvocation`.
     * @param ctx the parse tree
     */
    enterMacroInvocation?: (ctx: MacroInvocationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroInvocation`.
     * @param ctx the parse tree
     */
    exitMacroInvocation?: (ctx: MacroInvocationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.delimTokenTree`.
     * @param ctx the parse tree
     */
    enterDelimTokenTree?: (ctx: DelimTokenTreeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.delimTokenTree`.
     * @param ctx the parse tree
     */
    exitDelimTokenTree?: (ctx: DelimTokenTreeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tokenTree`.
     * @param ctx the parse tree
     */
    enterTokenTree?: (ctx: TokenTreeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tokenTree`.
     * @param ctx the parse tree
     */
    exitTokenTree?: (ctx: TokenTreeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tokenTreeToken`.
     * @param ctx the parse tree
     */
    enterTokenTreeToken?: (ctx: TokenTreeTokenContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tokenTreeToken`.
     * @param ctx the parse tree
     */
    exitTokenTreeToken?: (ctx: TokenTreeTokenContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroInvocationSemi`.
     * @param ctx the parse tree
     */
    enterMacroInvocationSemi?: (ctx: MacroInvocationSemiContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroInvocationSemi`.
     * @param ctx the parse tree
     */
    exitMacroInvocationSemi?: (ctx: MacroInvocationSemiContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroRulesDefinition`.
     * @param ctx the parse tree
     */
    enterMacroRulesDefinition?: (ctx: MacroRulesDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroRulesDefinition`.
     * @param ctx the parse tree
     */
    exitMacroRulesDefinition?: (ctx: MacroRulesDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroRulesDef`.
     * @param ctx the parse tree
     */
    enterMacroRulesDef?: (ctx: MacroRulesDefContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroRulesDef`.
     * @param ctx the parse tree
     */
    exitMacroRulesDef?: (ctx: MacroRulesDefContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroRules`.
     * @param ctx the parse tree
     */
    enterMacroRules?: (ctx: MacroRulesContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroRules`.
     * @param ctx the parse tree
     */
    exitMacroRules?: (ctx: MacroRulesContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroRule`.
     * @param ctx the parse tree
     */
    enterMacroRule?: (ctx: MacroRuleContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroRule`.
     * @param ctx the parse tree
     */
    exitMacroRule?: (ctx: MacroRuleContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroMatcher`.
     * @param ctx the parse tree
     */
    enterMacroMatcher?: (ctx: MacroMatcherContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroMatcher`.
     * @param ctx the parse tree
     */
    exitMacroMatcher?: (ctx: MacroMatcherContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroMatch`.
     * @param ctx the parse tree
     */
    enterMacroMatch?: (ctx: MacroMatchContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroMatch`.
     * @param ctx the parse tree
     */
    exitMacroMatch?: (ctx: MacroMatchContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroMatchToken`.
     * @param ctx the parse tree
     */
    enterMacroMatchToken?: (ctx: MacroMatchTokenContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroMatchToken`.
     * @param ctx the parse tree
     */
    exitMacroMatchToken?: (ctx: MacroMatchTokenContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroFragSpec`.
     * @param ctx the parse tree
     */
    enterMacroFragSpec?: (ctx: MacroFragSpecContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroFragSpec`.
     * @param ctx the parse tree
     */
    exitMacroFragSpec?: (ctx: MacroFragSpecContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroRepSep`.
     * @param ctx the parse tree
     */
    enterMacroRepSep?: (ctx: MacroRepSepContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroRepSep`.
     * @param ctx the parse tree
     */
    exitMacroRepSep?: (ctx: MacroRepSepContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroRepOp`.
     * @param ctx the parse tree
     */
    enterMacroRepOp?: (ctx: MacroRepOpContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroRepOp`.
     * @param ctx the parse tree
     */
    exitMacroRepOp?: (ctx: MacroRepOpContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroTranscriber`.
     * @param ctx the parse tree
     */
    enterMacroTranscriber?: (ctx: MacroTranscriberContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroTranscriber`.
     * @param ctx the parse tree
     */
    exitMacroTranscriber?: (ctx: MacroTranscriberContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.item`.
     * @param ctx the parse tree
     */
    enterItem?: (ctx: ItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.item`.
     * @param ctx the parse tree
     */
    exitItem?: (ctx: ItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.visItem`.
     * @param ctx the parse tree
     */
    enterVisItem?: (ctx: VisItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.visItem`.
     * @param ctx the parse tree
     */
    exitVisItem?: (ctx: VisItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroItem`.
     * @param ctx the parse tree
     */
    enterMacroItem?: (ctx: MacroItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroItem`.
     * @param ctx the parse tree
     */
    exitMacroItem?: (ctx: MacroItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.module`.
     * @param ctx the parse tree
     */
    enterModule?: (ctx: ModuleContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.module`.
     * @param ctx the parse tree
     */
    exitModule?: (ctx: ModuleContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.externCrate`.
     * @param ctx the parse tree
     */
    enterExternCrate?: (ctx: ExternCrateContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.externCrate`.
     * @param ctx the parse tree
     */
    exitExternCrate?: (ctx: ExternCrateContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.crateRef`.
     * @param ctx the parse tree
     */
    enterCrateRef?: (ctx: CrateRefContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.crateRef`.
     * @param ctx the parse tree
     */
    exitCrateRef?: (ctx: CrateRefContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.asClause`.
     * @param ctx the parse tree
     */
    enterAsClause?: (ctx: AsClauseContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.asClause`.
     * @param ctx the parse tree
     */
    exitAsClause?: (ctx: AsClauseContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.useDeclaration`.
     * @param ctx the parse tree
     */
    enterUseDeclaration?: (ctx: UseDeclarationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.useDeclaration`.
     * @param ctx the parse tree
     */
    exitUseDeclaration?: (ctx: UseDeclarationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.useTree`.
     * @param ctx the parse tree
     */
    enterUseTree?: (ctx: UseTreeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.useTree`.
     * @param ctx the parse tree
     */
    exitUseTree?: (ctx: UseTreeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.function_`.
     * @param ctx the parse tree
     */
    enterFunction_?: (ctx: Function_Context) => void;
    /**
     * Exit a parse tree produced by `RustParser.function_`.
     * @param ctx the parse tree
     */
    exitFunction_?: (ctx: Function_Context) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionQualifiers`.
     * @param ctx the parse tree
     */
    enterFunctionQualifiers?: (ctx: FunctionQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionQualifiers`.
     * @param ctx the parse tree
     */
    exitFunctionQualifiers?: (ctx: FunctionQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.abi`.
     * @param ctx the parse tree
     */
    enterAbi?: (ctx: AbiContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.abi`.
     * @param ctx the parse tree
     */
    exitAbi?: (ctx: AbiContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionParameters`.
     * @param ctx the parse tree
     */
    enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionParameters`.
     * @param ctx the parse tree
     */
    exitFunctionParameters?: (ctx: FunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.selfParam`.
     * @param ctx the parse tree
     */
    enterSelfParam?: (ctx: SelfParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.selfParam`.
     * @param ctx the parse tree
     */
    exitSelfParam?: (ctx: SelfParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.shorthandSelf`.
     * @param ctx the parse tree
     */
    enterShorthandSelf?: (ctx: ShorthandSelfContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.shorthandSelf`.
     * @param ctx the parse tree
     */
    exitShorthandSelf?: (ctx: ShorthandSelfContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typedSelf`.
     * @param ctx the parse tree
     */
    enterTypedSelf?: (ctx: TypedSelfContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typedSelf`.
     * @param ctx the parse tree
     */
    exitTypedSelf?: (ctx: TypedSelfContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionParam`.
     * @param ctx the parse tree
     */
    enterFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionParam`.
     * @param ctx the parse tree
     */
    exitFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionParamPattern`.
     * @param ctx the parse tree
     */
    enterFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionParamPattern`.
     * @param ctx the parse tree
     */
    exitFunctionParamPattern?: (ctx: FunctionParamPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionReturnType`.
     * @param ctx the parse tree
     */
    enterFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionReturnType`.
     * @param ctx the parse tree
     */
    exitFunctionReturnType?: (ctx: FunctionReturnTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typeAlias`.
     * @param ctx the parse tree
     */
    enterTypeAlias?: (ctx: TypeAliasContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typeAlias`.
     * @param ctx the parse tree
     */
    exitTypeAlias?: (ctx: TypeAliasContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.struct_`.
     * @param ctx the parse tree
     */
    enterStruct_?: (ctx: Struct_Context) => void;
    /**
     * Exit a parse tree produced by `RustParser.struct_`.
     * @param ctx the parse tree
     */
    exitStruct_?: (ctx: Struct_Context) => void;
    /**
     * Enter a parse tree produced by `RustParser.structStruct`.
     * @param ctx the parse tree
     */
    enterStructStruct?: (ctx: StructStructContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structStruct`.
     * @param ctx the parse tree
     */
    exitStructStruct?: (ctx: StructStructContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleStruct`.
     * @param ctx the parse tree
     */
    enterTupleStruct?: (ctx: TupleStructContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleStruct`.
     * @param ctx the parse tree
     */
    exitTupleStruct?: (ctx: TupleStructContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structFields`.
     * @param ctx the parse tree
     */
    enterStructFields?: (ctx: StructFieldsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structFields`.
     * @param ctx the parse tree
     */
    exitStructFields?: (ctx: StructFieldsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structField`.
     * @param ctx the parse tree
     */
    enterStructField?: (ctx: StructFieldContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structField`.
     * @param ctx the parse tree
     */
    exitStructField?: (ctx: StructFieldContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleFields`.
     * @param ctx the parse tree
     */
    enterTupleFields?: (ctx: TupleFieldsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleFields`.
     * @param ctx the parse tree
     */
    exitTupleFields?: (ctx: TupleFieldsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleField`.
     * @param ctx the parse tree
     */
    enterTupleField?: (ctx: TupleFieldContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleField`.
     * @param ctx the parse tree
     */
    exitTupleField?: (ctx: TupleFieldContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumeration`.
     * @param ctx the parse tree
     */
    enterEnumeration?: (ctx: EnumerationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumeration`.
     * @param ctx the parse tree
     */
    exitEnumeration?: (ctx: EnumerationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumItems`.
     * @param ctx the parse tree
     */
    enterEnumItems?: (ctx: EnumItemsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumItems`.
     * @param ctx the parse tree
     */
    exitEnumItems?: (ctx: EnumItemsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumItem`.
     * @param ctx the parse tree
     */
    enterEnumItem?: (ctx: EnumItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumItem`.
     * @param ctx the parse tree
     */
    exitEnumItem?: (ctx: EnumItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumItemTuple`.
     * @param ctx the parse tree
     */
    enterEnumItemTuple?: (ctx: EnumItemTupleContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumItemTuple`.
     * @param ctx the parse tree
     */
    exitEnumItemTuple?: (ctx: EnumItemTupleContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumItemStruct`.
     * @param ctx the parse tree
     */
    enterEnumItemStruct?: (ctx: EnumItemStructContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumItemStruct`.
     * @param ctx the parse tree
     */
    exitEnumItemStruct?: (ctx: EnumItemStructContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumItemDiscriminant`.
     * @param ctx the parse tree
     */
    enterEnumItemDiscriminant?: (ctx: EnumItemDiscriminantContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumItemDiscriminant`.
     * @param ctx the parse tree
     */
    exitEnumItemDiscriminant?: (ctx: EnumItemDiscriminantContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.union_`.
     * @param ctx the parse tree
     */
    enterUnion_?: (ctx: Union_Context) => void;
    /**
     * Exit a parse tree produced by `RustParser.union_`.
     * @param ctx the parse tree
     */
    exitUnion_?: (ctx: Union_Context) => void;
    /**
     * Enter a parse tree produced by `RustParser.constantItem`.
     * @param ctx the parse tree
     */
    enterConstantItem?: (ctx: ConstantItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.constantItem`.
     * @param ctx the parse tree
     */
    exitConstantItem?: (ctx: ConstantItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.staticItem`.
     * @param ctx the parse tree
     */
    enterStaticItem?: (ctx: StaticItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.staticItem`.
     * @param ctx the parse tree
     */
    exitStaticItem?: (ctx: StaticItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.trait_`.
     * @param ctx the parse tree
     */
    enterTrait_?: (ctx: Trait_Context) => void;
    /**
     * Exit a parse tree produced by `RustParser.trait_`.
     * @param ctx the parse tree
     */
    exitTrait_?: (ctx: Trait_Context) => void;
    /**
     * Enter a parse tree produced by `RustParser.implementation`.
     * @param ctx the parse tree
     */
    enterImplementation?: (ctx: ImplementationContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.implementation`.
     * @param ctx the parse tree
     */
    exitImplementation?: (ctx: ImplementationContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.inherentImpl`.
     * @param ctx the parse tree
     */
    enterInherentImpl?: (ctx: InherentImplContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.inherentImpl`.
     * @param ctx the parse tree
     */
    exitInherentImpl?: (ctx: InherentImplContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.traitImpl`.
     * @param ctx the parse tree
     */
    enterTraitImpl?: (ctx: TraitImplContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.traitImpl`.
     * @param ctx the parse tree
     */
    exitTraitImpl?: (ctx: TraitImplContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.externBlock`.
     * @param ctx the parse tree
     */
    enterExternBlock?: (ctx: ExternBlockContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.externBlock`.
     * @param ctx the parse tree
     */
    exitExternBlock?: (ctx: ExternBlockContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.externalItem`.
     * @param ctx the parse tree
     */
    enterExternalItem?: (ctx: ExternalItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.externalItem`.
     * @param ctx the parse tree
     */
    exitExternalItem?: (ctx: ExternalItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericParams`.
     * @param ctx the parse tree
     */
    enterGenericParams?: (ctx: GenericParamsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericParams`.
     * @param ctx the parse tree
     */
    exitGenericParams?: (ctx: GenericParamsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericParam`.
     * @param ctx the parse tree
     */
    enterGenericParam?: (ctx: GenericParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericParam`.
     * @param ctx the parse tree
     */
    exitGenericParam?: (ctx: GenericParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.lifetimeParam`.
     * @param ctx the parse tree
     */
    enterLifetimeParam?: (ctx: LifetimeParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.lifetimeParam`.
     * @param ctx the parse tree
     */
    exitLifetimeParam?: (ctx: LifetimeParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typeParam`.
     * @param ctx the parse tree
     */
    enterTypeParam?: (ctx: TypeParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typeParam`.
     * @param ctx the parse tree
     */
    exitTypeParam?: (ctx: TypeParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.constParam`.
     * @param ctx the parse tree
     */
    enterConstParam?: (ctx: ConstParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.constParam`.
     * @param ctx the parse tree
     */
    exitConstParam?: (ctx: ConstParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.whereClauseItem`.
     * @param ctx the parse tree
     */
    enterWhereClauseItem?: (ctx: WhereClauseItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.whereClauseItem`.
     * @param ctx the parse tree
     */
    exitWhereClauseItem?: (ctx: WhereClauseItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.lifetimeWhereClauseItem`.
     * @param ctx the parse tree
     */
    enterLifetimeWhereClauseItem?: (ctx: LifetimeWhereClauseItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.lifetimeWhereClauseItem`.
     * @param ctx the parse tree
     */
    exitLifetimeWhereClauseItem?: (ctx: LifetimeWhereClauseItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typeBoundWhereClauseItem`.
     * @param ctx the parse tree
     */
    enterTypeBoundWhereClauseItem?: (ctx: TypeBoundWhereClauseItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typeBoundWhereClauseItem`.
     * @param ctx the parse tree
     */
    exitTypeBoundWhereClauseItem?: (ctx: TypeBoundWhereClauseItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.forLifetimes`.
     * @param ctx the parse tree
     */
    enterForLifetimes?: (ctx: ForLifetimesContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.forLifetimes`.
     * @param ctx the parse tree
     */
    exitForLifetimes?: (ctx: ForLifetimesContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.associatedItem`.
     * @param ctx the parse tree
     */
    enterAssociatedItem?: (ctx: AssociatedItemContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.associatedItem`.
     * @param ctx the parse tree
     */
    exitAssociatedItem?: (ctx: AssociatedItemContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.innerAttribute`.
     * @param ctx the parse tree
     */
    enterInnerAttribute?: (ctx: InnerAttributeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.innerAttribute`.
     * @param ctx the parse tree
     */
    exitInnerAttribute?: (ctx: InnerAttributeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.outerAttribute`.
     * @param ctx the parse tree
     */
    enterOuterAttribute?: (ctx: OuterAttributeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.outerAttribute`.
     * @param ctx the parse tree
     */
    exitOuterAttribute?: (ctx: OuterAttributeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.attr`.
     * @param ctx the parse tree
     */
    enterAttr?: (ctx: AttrContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.attr`.
     * @param ctx the parse tree
     */
    exitAttr?: (ctx: AttrContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.attrInput`.
     * @param ctx the parse tree
     */
    enterAttrInput?: (ctx: AttrInputContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.attrInput`.
     * @param ctx the parse tree
     */
    exitAttrInput?: (ctx: AttrInputContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.letStatement`.
     * @param ctx the parse tree
     */
    enterLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.letStatement`.
     * @param ctx the parse tree
     */
    exitLetStatement?: (ctx: LetStatementContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     */
    exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;
    /**
     * Enter a parse tree produced by the `TypeCastExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterTypeCastExpression?: (ctx: TypeCastExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `TypeCastExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitTypeCastExpression?: (ctx: TypeCastExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `PathExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterPathExpression_?: (ctx: PathExpression_Context) => void;
    /**
     * Exit a parse tree produced by the `PathExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitPathExpression_?: (ctx: PathExpression_Context) => void;
    /**
     * Enter a parse tree produced by the `TupleExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterTupleExpression?: (ctx: TupleExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `TupleExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitTupleExpression?: (ctx: TupleExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `IndexExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterIndexExpression?: (ctx: IndexExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `IndexExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitIndexExpression?: (ctx: IndexExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `RangeExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterRangeExpression?: (ctx: RangeExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `RangeExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitRangeExpression?: (ctx: RangeExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `MacroInvocationAsExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterMacroInvocationAsExpression?: (ctx: MacroInvocationAsExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `MacroInvocationAsExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitMacroInvocationAsExpression?: (ctx: MacroInvocationAsExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ReturnExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterReturnExpression?: (ctx: ReturnExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ReturnExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitReturnExpression?: (ctx: ReturnExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `AwaitExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterAwaitExpression?: (ctx: AwaitExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `AwaitExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitAwaitExpression?: (ctx: AwaitExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ErrorPropagationExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterErrorPropagationExpression?: (ctx: ErrorPropagationExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ErrorPropagationExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitErrorPropagationExpression?: (ctx: ErrorPropagationExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ContinueExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterContinueExpression?: (ctx: ContinueExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ContinueExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitContinueExpression?: (ctx: ContinueExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `AssignmentExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `AssignmentExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `MethodCallExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `MethodCallExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `LiteralExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterLiteralExpression_?: (ctx: LiteralExpression_Context) => void;
    /**
     * Exit a parse tree produced by the `LiteralExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitLiteralExpression_?: (ctx: LiteralExpression_Context) => void;
    /**
     * Enter a parse tree produced by the `StructExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterStructExpression_?: (ctx: StructExpression_Context) => void;
    /**
     * Exit a parse tree produced by the `StructExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitStructExpression_?: (ctx: StructExpression_Context) => void;
    /**
     * Enter a parse tree produced by the `TupleIndexingExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterTupleIndexingExpression?: (ctx: TupleIndexingExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `TupleIndexingExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitTupleIndexingExpression?: (ctx: TupleIndexingExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `NegationExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterNegationExpression?: (ctx: NegationExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `NegationExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitNegationExpression?: (ctx: NegationExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `CallExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterCallExpression?: (ctx: CallExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `CallExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitCallExpression?: (ctx: CallExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `LazyBooleanExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterLazyBooleanExpression?: (ctx: LazyBooleanExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `LazyBooleanExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitLazyBooleanExpression?: (ctx: LazyBooleanExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `DereferenceExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterDereferenceExpression?: (ctx: DereferenceExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `DereferenceExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitDereferenceExpression?: (ctx: DereferenceExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ExpressionWithBlock_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterExpressionWithBlock_?: (ctx: ExpressionWithBlock_Context) => void;
    /**
     * Exit a parse tree produced by the `ExpressionWithBlock_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitExpressionWithBlock_?: (ctx: ExpressionWithBlock_Context) => void;
    /**
     * Enter a parse tree produced by the `GroupedExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterGroupedExpression?: (ctx: GroupedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `GroupedExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitGroupedExpression?: (ctx: GroupedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `BreakExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterBreakExpression?: (ctx: BreakExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `BreakExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitBreakExpression?: (ctx: BreakExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ArithmeticOrLogicalExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterArithmeticOrLogicalExpression?: (ctx: ArithmeticOrLogicalExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ArithmeticOrLogicalExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitArithmeticOrLogicalExpression?: (ctx: ArithmeticOrLogicalExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `FieldExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterFieldExpression?: (ctx: FieldExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `FieldExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitFieldExpression?: (ctx: FieldExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `EnumerationVariantExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterEnumerationVariantExpression_?: (ctx: EnumerationVariantExpression_Context) => void;
    /**
     * Exit a parse tree produced by the `EnumerationVariantExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitEnumerationVariantExpression_?: (ctx: EnumerationVariantExpression_Context) => void;
    /**
     * Enter a parse tree produced by the `ComparisonExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ComparisonExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitComparisonExpression?: (ctx: ComparisonExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `AttributedExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterAttributedExpression?: (ctx: AttributedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `AttributedExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitAttributedExpression?: (ctx: AttributedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `BorrowExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `BorrowExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitBorrowExpression?: (ctx: BorrowExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `CompoundAssignmentExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterCompoundAssignmentExpression?: (ctx: CompoundAssignmentExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `CompoundAssignmentExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitCompoundAssignmentExpression?: (ctx: CompoundAssignmentExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `ClosureExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterClosureExpression_?: (ctx: ClosureExpression_Context) => void;
    /**
     * Exit a parse tree produced by the `ClosureExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitClosureExpression_?: (ctx: ClosureExpression_Context) => void;
    /**
     * Enter a parse tree produced by the `ArrayExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `ArrayExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     */
    exitArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.compoundAssignOperator`.
     * @param ctx the parse tree
     */
    enterCompoundAssignOperator?: (ctx: CompoundAssignOperatorContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.compoundAssignOperator`.
     * @param ctx the parse tree
     */
    exitCompoundAssignOperator?: (ctx: CompoundAssignOperatorContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.expressionWithBlock`.
     * @param ctx the parse tree
     */
    enterExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.expressionWithBlock`.
     * @param ctx the parse tree
     */
    exitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.pathExpression`.
     * @param ctx the parse tree
     */
    enterPathExpression?: (ctx: PathExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.pathExpression`.
     * @param ctx the parse tree
     */
    exitPathExpression?: (ctx: PathExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.blockExpression`.
     * @param ctx the parse tree
     */
    enterBlockExpression?: (ctx: BlockExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.blockExpression`.
     * @param ctx the parse tree
     */
    exitBlockExpression?: (ctx: BlockExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.statements`.
     * @param ctx the parse tree
     */
    enterStatements?: (ctx: StatementsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.statements`.
     * @param ctx the parse tree
     */
    exitStatements?: (ctx: StatementsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.asyncBlockExpression`.
     * @param ctx the parse tree
     */
    enterAsyncBlockExpression?: (ctx: AsyncBlockExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.asyncBlockExpression`.
     * @param ctx the parse tree
     */
    exitAsyncBlockExpression?: (ctx: AsyncBlockExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.unsafeBlockExpression`.
     * @param ctx the parse tree
     */
    enterUnsafeBlockExpression?: (ctx: UnsafeBlockExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.unsafeBlockExpression`.
     * @param ctx the parse tree
     */
    exitUnsafeBlockExpression?: (ctx: UnsafeBlockExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.arrayElements`.
     * @param ctx the parse tree
     */
    enterArrayElements?: (ctx: ArrayElementsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.arrayElements`.
     * @param ctx the parse tree
     */
    exitArrayElements?: (ctx: ArrayElementsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleElements`.
     * @param ctx the parse tree
     */
    enterTupleElements?: (ctx: TupleElementsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleElements`.
     * @param ctx the parse tree
     */
    exitTupleElements?: (ctx: TupleElementsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleIndex`.
     * @param ctx the parse tree
     */
    enterTupleIndex?: (ctx: TupleIndexContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleIndex`.
     * @param ctx the parse tree
     */
    exitTupleIndex?: (ctx: TupleIndexContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structExpression`.
     * @param ctx the parse tree
     */
    enterStructExpression?: (ctx: StructExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structExpression`.
     * @param ctx the parse tree
     */
    exitStructExpression?: (ctx: StructExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structExprStruct`.
     * @param ctx the parse tree
     */
    enterStructExprStruct?: (ctx: StructExprStructContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structExprStruct`.
     * @param ctx the parse tree
     */
    exitStructExprStruct?: (ctx: StructExprStructContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structExprFields`.
     * @param ctx the parse tree
     */
    enterStructExprFields?: (ctx: StructExprFieldsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structExprFields`.
     * @param ctx the parse tree
     */
    exitStructExprFields?: (ctx: StructExprFieldsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structExprField`.
     * @param ctx the parse tree
     */
    enterStructExprField?: (ctx: StructExprFieldContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structExprField`.
     * @param ctx the parse tree
     */
    exitStructExprField?: (ctx: StructExprFieldContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structBase`.
     * @param ctx the parse tree
     */
    enterStructBase?: (ctx: StructBaseContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structBase`.
     * @param ctx the parse tree
     */
    exitStructBase?: (ctx: StructBaseContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structExprTuple`.
     * @param ctx the parse tree
     */
    enterStructExprTuple?: (ctx: StructExprTupleContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structExprTuple`.
     * @param ctx the parse tree
     */
    exitStructExprTuple?: (ctx: StructExprTupleContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structExprUnit`.
     * @param ctx the parse tree
     */
    enterStructExprUnit?: (ctx: StructExprUnitContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structExprUnit`.
     * @param ctx the parse tree
     */
    exitStructExprUnit?: (ctx: StructExprUnitContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumerationVariantExpression`.
     * @param ctx the parse tree
     */
    enterEnumerationVariantExpression?: (ctx: EnumerationVariantExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumerationVariantExpression`.
     * @param ctx the parse tree
     */
    exitEnumerationVariantExpression?: (ctx: EnumerationVariantExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumExprStruct`.
     * @param ctx the parse tree
     */
    enterEnumExprStruct?: (ctx: EnumExprStructContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumExprStruct`.
     * @param ctx the parse tree
     */
    exitEnumExprStruct?: (ctx: EnumExprStructContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumExprFields`.
     * @param ctx the parse tree
     */
    enterEnumExprFields?: (ctx: EnumExprFieldsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumExprFields`.
     * @param ctx the parse tree
     */
    exitEnumExprFields?: (ctx: EnumExprFieldsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumExprField`.
     * @param ctx the parse tree
     */
    enterEnumExprField?: (ctx: EnumExprFieldContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumExprField`.
     * @param ctx the parse tree
     */
    exitEnumExprField?: (ctx: EnumExprFieldContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumExprTuple`.
     * @param ctx the parse tree
     */
    enterEnumExprTuple?: (ctx: EnumExprTupleContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumExprTuple`.
     * @param ctx the parse tree
     */
    exitEnumExprTuple?: (ctx: EnumExprTupleContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.enumExprFieldless`.
     * @param ctx the parse tree
     */
    enterEnumExprFieldless?: (ctx: EnumExprFieldlessContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.enumExprFieldless`.
     * @param ctx the parse tree
     */
    exitEnumExprFieldless?: (ctx: EnumExprFieldlessContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.callParams`.
     * @param ctx the parse tree
     */
    enterCallParams?: (ctx: CallParamsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.callParams`.
     * @param ctx the parse tree
     */
    exitCallParams?: (ctx: CallParamsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.closureExpression`.
     * @param ctx the parse tree
     */
    enterClosureExpression?: (ctx: ClosureExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.closureExpression`.
     * @param ctx the parse tree
     */
    exitClosureExpression?: (ctx: ClosureExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.closureParameters`.
     * @param ctx the parse tree
     */
    enterClosureParameters?: (ctx: ClosureParametersContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.closureParameters`.
     * @param ctx the parse tree
     */
    exitClosureParameters?: (ctx: ClosureParametersContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.closureParam`.
     * @param ctx the parse tree
     */
    enterClosureParam?: (ctx: ClosureParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.closureParam`.
     * @param ctx the parse tree
     */
    exitClosureParam?: (ctx: ClosureParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.loopExpression`.
     * @param ctx the parse tree
     */
    enterLoopExpression?: (ctx: LoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.loopExpression`.
     * @param ctx the parse tree
     */
    exitLoopExpression?: (ctx: LoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.infiniteLoopExpression`.
     * @param ctx the parse tree
     */
    enterInfiniteLoopExpression?: (ctx: InfiniteLoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.infiniteLoopExpression`.
     * @param ctx the parse tree
     */
    exitInfiniteLoopExpression?: (ctx: InfiniteLoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.predicateLoopExpression`.
     * @param ctx the parse tree
     */
    enterPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.predicateLoopExpression`.
     * @param ctx the parse tree
     */
    exitPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.predicatePatternLoopExpression`.
     * @param ctx the parse tree
     */
    enterPredicatePatternLoopExpression?: (ctx: PredicatePatternLoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.predicatePatternLoopExpression`.
     * @param ctx the parse tree
     */
    exitPredicatePatternLoopExpression?: (ctx: PredicatePatternLoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.iteratorLoopExpression`.
     * @param ctx the parse tree
     */
    enterIteratorLoopExpression?: (ctx: IteratorLoopExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.iteratorLoopExpression`.
     * @param ctx the parse tree
     */
    exitIteratorLoopExpression?: (ctx: IteratorLoopExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.loopLabel`.
     * @param ctx the parse tree
     */
    enterLoopLabel?: (ctx: LoopLabelContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.loopLabel`.
     * @param ctx the parse tree
     */
    exitLoopLabel?: (ctx: LoopLabelContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.ifExpression`.
     * @param ctx the parse tree
     */
    enterIfExpression?: (ctx: IfExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.ifExpression`.
     * @param ctx the parse tree
     */
    exitIfExpression?: (ctx: IfExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.ifLetExpression`.
     * @param ctx the parse tree
     */
    enterIfLetExpression?: (ctx: IfLetExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.ifLetExpression`.
     * @param ctx the parse tree
     */
    exitIfLetExpression?: (ctx: IfLetExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.matchExpression`.
     * @param ctx the parse tree
     */
    enterMatchExpression?: (ctx: MatchExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.matchExpression`.
     * @param ctx the parse tree
     */
    exitMatchExpression?: (ctx: MatchExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.matchArms`.
     * @param ctx the parse tree
     */
    enterMatchArms?: (ctx: MatchArmsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.matchArms`.
     * @param ctx the parse tree
     */
    exitMatchArms?: (ctx: MatchArmsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.matchArmExpression`.
     * @param ctx the parse tree
     */
    enterMatchArmExpression?: (ctx: MatchArmExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.matchArmExpression`.
     * @param ctx the parse tree
     */
    exitMatchArmExpression?: (ctx: MatchArmExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.matchArm`.
     * @param ctx the parse tree
     */
    enterMatchArm?: (ctx: MatchArmContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.matchArm`.
     * @param ctx the parse tree
     */
    exitMatchArm?: (ctx: MatchArmContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.matchArmGuard`.
     * @param ctx the parse tree
     */
    enterMatchArmGuard?: (ctx: MatchArmGuardContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.matchArmGuard`.
     * @param ctx the parse tree
     */
    exitMatchArmGuard?: (ctx: MatchArmGuardContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.pattern`.
     * @param ctx the parse tree
     */
    enterPattern?: (ctx: PatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.pattern`.
     * @param ctx the parse tree
     */
    exitPattern?: (ctx: PatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.patternNoTopAlt`.
     * @param ctx the parse tree
     */
    enterPatternNoTopAlt?: (ctx: PatternNoTopAltContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.patternNoTopAlt`.
     * @param ctx the parse tree
     */
    exitPatternNoTopAlt?: (ctx: PatternNoTopAltContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.patternWithoutRange`.
     * @param ctx the parse tree
     */
    enterPatternWithoutRange?: (ctx: PatternWithoutRangeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.patternWithoutRange`.
     * @param ctx the parse tree
     */
    exitPatternWithoutRange?: (ctx: PatternWithoutRangeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.literalPattern`.
     * @param ctx the parse tree
     */
    enterLiteralPattern?: (ctx: LiteralPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.literalPattern`.
     * @param ctx the parse tree
     */
    exitLiteralPattern?: (ctx: LiteralPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.identifierPattern`.
     * @param ctx the parse tree
     */
    enterIdentifierPattern?: (ctx: IdentifierPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.identifierPattern`.
     * @param ctx the parse tree
     */
    exitIdentifierPattern?: (ctx: IdentifierPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.wildcardPattern`.
     * @param ctx the parse tree
     */
    enterWildcardPattern?: (ctx: WildcardPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.wildcardPattern`.
     * @param ctx the parse tree
     */
    exitWildcardPattern?: (ctx: WildcardPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.restPattern`.
     * @param ctx the parse tree
     */
    enterRestPattern?: (ctx: RestPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.restPattern`.
     * @param ctx the parse tree
     */
    exitRestPattern?: (ctx: RestPatternContext) => void;
    /**
     * Enter a parse tree produced by the `InclusiveRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     */
    enterInclusiveRangePattern?: (ctx: InclusiveRangePatternContext) => void;
    /**
     * Exit a parse tree produced by the `InclusiveRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     */
    exitInclusiveRangePattern?: (ctx: InclusiveRangePatternContext) => void;
    /**
     * Enter a parse tree produced by the `HalfOpenRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     */
    enterHalfOpenRangePattern?: (ctx: HalfOpenRangePatternContext) => void;
    /**
     * Exit a parse tree produced by the `HalfOpenRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     */
    exitHalfOpenRangePattern?: (ctx: HalfOpenRangePatternContext) => void;
    /**
     * Enter a parse tree produced by the `ObsoleteRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     */
    enterObsoleteRangePattern?: (ctx: ObsoleteRangePatternContext) => void;
    /**
     * Exit a parse tree produced by the `ObsoleteRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     */
    exitObsoleteRangePattern?: (ctx: ObsoleteRangePatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.rangePatternBound`.
     * @param ctx the parse tree
     */
    enterRangePatternBound?: (ctx: RangePatternBoundContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.rangePatternBound`.
     * @param ctx the parse tree
     */
    exitRangePatternBound?: (ctx: RangePatternBoundContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.referencePattern`.
     * @param ctx the parse tree
     */
    enterReferencePattern?: (ctx: ReferencePatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.referencePattern`.
     * @param ctx the parse tree
     */
    exitReferencePattern?: (ctx: ReferencePatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structPattern`.
     * @param ctx the parse tree
     */
    enterStructPattern?: (ctx: StructPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structPattern`.
     * @param ctx the parse tree
     */
    exitStructPattern?: (ctx: StructPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structPatternElements`.
     * @param ctx the parse tree
     */
    enterStructPatternElements?: (ctx: StructPatternElementsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structPatternElements`.
     * @param ctx the parse tree
     */
    exitStructPatternElements?: (ctx: StructPatternElementsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structPatternFields`.
     * @param ctx the parse tree
     */
    enterStructPatternFields?: (ctx: StructPatternFieldsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structPatternFields`.
     * @param ctx the parse tree
     */
    exitStructPatternFields?: (ctx: StructPatternFieldsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structPatternField`.
     * @param ctx the parse tree
     */
    enterStructPatternField?: (ctx: StructPatternFieldContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structPatternField`.
     * @param ctx the parse tree
     */
    exitStructPatternField?: (ctx: StructPatternFieldContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.structPatternEtCetera`.
     * @param ctx the parse tree
     */
    enterStructPatternEtCetera?: (ctx: StructPatternEtCeteraContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.structPatternEtCetera`.
     * @param ctx the parse tree
     */
    exitStructPatternEtCetera?: (ctx: StructPatternEtCeteraContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleStructPattern`.
     * @param ctx the parse tree
     */
    enterTupleStructPattern?: (ctx: TupleStructPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleStructPattern`.
     * @param ctx the parse tree
     */
    exitTupleStructPattern?: (ctx: TupleStructPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleStructItems`.
     * @param ctx the parse tree
     */
    enterTupleStructItems?: (ctx: TupleStructItemsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleStructItems`.
     * @param ctx the parse tree
     */
    exitTupleStructItems?: (ctx: TupleStructItemsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tuplePattern`.
     * @param ctx the parse tree
     */
    enterTuplePattern?: (ctx: TuplePatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tuplePattern`.
     * @param ctx the parse tree
     */
    exitTuplePattern?: (ctx: TuplePatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tuplePatternItems`.
     * @param ctx the parse tree
     */
    enterTuplePatternItems?: (ctx: TuplePatternItemsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tuplePatternItems`.
     * @param ctx the parse tree
     */
    exitTuplePatternItems?: (ctx: TuplePatternItemsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.groupedPattern`.
     * @param ctx the parse tree
     */
    enterGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.groupedPattern`.
     * @param ctx the parse tree
     */
    exitGroupedPattern?: (ctx: GroupedPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.slicePattern`.
     * @param ctx the parse tree
     */
    enterSlicePattern?: (ctx: SlicePatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.slicePattern`.
     * @param ctx the parse tree
     */
    exitSlicePattern?: (ctx: SlicePatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.slicePatternItems`.
     * @param ctx the parse tree
     */
    enterSlicePatternItems?: (ctx: SlicePatternItemsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.slicePatternItems`.
     * @param ctx the parse tree
     */
    exitSlicePatternItems?: (ctx: SlicePatternItemsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.pathPattern`.
     * @param ctx the parse tree
     */
    enterPathPattern?: (ctx: PathPatternContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.pathPattern`.
     * @param ctx the parse tree
     */
    exitPathPattern?: (ctx: PathPatternContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.type_`.
     * @param ctx the parse tree
     */
    enterType_?: (ctx: Type_Context) => void;
    /**
     * Exit a parse tree produced by `RustParser.type_`.
     * @param ctx the parse tree
     */
    exitType_?: (ctx: Type_Context) => void;
    /**
     * Enter a parse tree produced by `RustParser.typeNoBounds`.
     * @param ctx the parse tree
     */
    enterTypeNoBounds?: (ctx: TypeNoBoundsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typeNoBounds`.
     * @param ctx the parse tree
     */
    exitTypeNoBounds?: (ctx: TypeNoBoundsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.parenthesizedType`.
     * @param ctx the parse tree
     */
    enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.parenthesizedType`.
     * @param ctx the parse tree
     */
    exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.neverType`.
     * @param ctx the parse tree
     */
    enterNeverType?: (ctx: NeverTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.neverType`.
     * @param ctx the parse tree
     */
    exitNeverType?: (ctx: NeverTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.tupleType`.
     * @param ctx the parse tree
     */
    enterTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.tupleType`.
     * @param ctx the parse tree
     */
    exitTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.arrayType`.
     * @param ctx the parse tree
     */
    enterArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.arrayType`.
     * @param ctx the parse tree
     */
    exitArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.sliceType`.
     * @param ctx the parse tree
     */
    enterSliceType?: (ctx: SliceTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.sliceType`.
     * @param ctx the parse tree
     */
    exitSliceType?: (ctx: SliceTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.referenceType`.
     * @param ctx the parse tree
     */
    enterReferenceType?: (ctx: ReferenceTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.referenceType`.
     * @param ctx the parse tree
     */
    exitReferenceType?: (ctx: ReferenceTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.rawPointerType`.
     * @param ctx the parse tree
     */
    enterRawPointerType?: (ctx: RawPointerTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.rawPointerType`.
     * @param ctx the parse tree
     */
    exitRawPointerType?: (ctx: RawPointerTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.bareFunctionType`.
     * @param ctx the parse tree
     */
    enterBareFunctionType?: (ctx: BareFunctionTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.bareFunctionType`.
     * @param ctx the parse tree
     */
    exitBareFunctionType?: (ctx: BareFunctionTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionTypeQualifiers`.
     * @param ctx the parse tree
     */
    enterFunctionTypeQualifiers?: (ctx: FunctionTypeQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionTypeQualifiers`.
     * @param ctx the parse tree
     */
    exitFunctionTypeQualifiers?: (ctx: FunctionTypeQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.bareFunctionReturnType`.
     * @param ctx the parse tree
     */
    enterBareFunctionReturnType?: (ctx: BareFunctionReturnTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.bareFunctionReturnType`.
     * @param ctx the parse tree
     */
    exitBareFunctionReturnType?: (ctx: BareFunctionReturnTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.functionParametersMaybeNamedVariadic`.
     * @param ctx the parse tree
     */
    enterFunctionParametersMaybeNamedVariadic?: (ctx: FunctionParametersMaybeNamedVariadicContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.functionParametersMaybeNamedVariadic`.
     * @param ctx the parse tree
     */
    exitFunctionParametersMaybeNamedVariadic?: (ctx: FunctionParametersMaybeNamedVariadicContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.maybeNamedFunctionParameters`.
     * @param ctx the parse tree
     */
    enterMaybeNamedFunctionParameters?: (ctx: MaybeNamedFunctionParametersContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.maybeNamedFunctionParameters`.
     * @param ctx the parse tree
     */
    exitMaybeNamedFunctionParameters?: (ctx: MaybeNamedFunctionParametersContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.maybeNamedParam`.
     * @param ctx the parse tree
     */
    enterMaybeNamedParam?: (ctx: MaybeNamedParamContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.maybeNamedParam`.
     * @param ctx the parse tree
     */
    exitMaybeNamedParam?: (ctx: MaybeNamedParamContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.maybeNamedFunctionParametersVariadic`.
     * @param ctx the parse tree
     */
    enterMaybeNamedFunctionParametersVariadic?: (ctx: MaybeNamedFunctionParametersVariadicContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.maybeNamedFunctionParametersVariadic`.
     * @param ctx the parse tree
     */
    exitMaybeNamedFunctionParametersVariadic?: (ctx: MaybeNamedFunctionParametersVariadicContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.traitObjectType`.
     * @param ctx the parse tree
     */
    enterTraitObjectType?: (ctx: TraitObjectTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.traitObjectType`.
     * @param ctx the parse tree
     */
    exitTraitObjectType?: (ctx: TraitObjectTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.traitObjectTypeOneBound`.
     * @param ctx the parse tree
     */
    enterTraitObjectTypeOneBound?: (ctx: TraitObjectTypeOneBoundContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.traitObjectTypeOneBound`.
     * @param ctx the parse tree
     */
    exitTraitObjectTypeOneBound?: (ctx: TraitObjectTypeOneBoundContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.implTraitType`.
     * @param ctx the parse tree
     */
    enterImplTraitType?: (ctx: ImplTraitTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.implTraitType`.
     * @param ctx the parse tree
     */
    exitImplTraitType?: (ctx: ImplTraitTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.implTraitTypeOneBound`.
     * @param ctx the parse tree
     */
    enterImplTraitTypeOneBound?: (ctx: ImplTraitTypeOneBoundContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.implTraitTypeOneBound`.
     * @param ctx the parse tree
     */
    exitImplTraitTypeOneBound?: (ctx: ImplTraitTypeOneBoundContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.inferredType`.
     * @param ctx the parse tree
     */
    enterInferredType?: (ctx: InferredTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.inferredType`.
     * @param ctx the parse tree
     */
    exitInferredType?: (ctx: InferredTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typeParamBounds`.
     * @param ctx the parse tree
     */
    enterTypeParamBounds?: (ctx: TypeParamBoundsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typeParamBounds`.
     * @param ctx the parse tree
     */
    exitTypeParamBounds?: (ctx: TypeParamBoundsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typeParamBound`.
     * @param ctx the parse tree
     */
    enterTypeParamBound?: (ctx: TypeParamBoundContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typeParamBound`.
     * @param ctx the parse tree
     */
    exitTypeParamBound?: (ctx: TypeParamBoundContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.traitBound`.
     * @param ctx the parse tree
     */
    enterTraitBound?: (ctx: TraitBoundContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.traitBound`.
     * @param ctx the parse tree
     */
    exitTraitBound?: (ctx: TraitBoundContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.lifetimeBounds`.
     * @param ctx the parse tree
     */
    enterLifetimeBounds?: (ctx: LifetimeBoundsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.lifetimeBounds`.
     * @param ctx the parse tree
     */
    exitLifetimeBounds?: (ctx: LifetimeBoundsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.lifetime`.
     * @param ctx the parse tree
     */
    enterLifetime?: (ctx: LifetimeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.lifetime`.
     * @param ctx the parse tree
     */
    exitLifetime?: (ctx: LifetimeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.simplePath`.
     * @param ctx the parse tree
     */
    enterSimplePath?: (ctx: SimplePathContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.simplePath`.
     * @param ctx the parse tree
     */
    exitSimplePath?: (ctx: SimplePathContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.simplePathSegment`.
     * @param ctx the parse tree
     */
    enterSimplePathSegment?: (ctx: SimplePathSegmentContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.simplePathSegment`.
     * @param ctx the parse tree
     */
    exitSimplePathSegment?: (ctx: SimplePathSegmentContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.pathInExpression`.
     * @param ctx the parse tree
     */
    enterPathInExpression?: (ctx: PathInExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.pathInExpression`.
     * @param ctx the parse tree
     */
    exitPathInExpression?: (ctx: PathInExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.pathExprSegment`.
     * @param ctx the parse tree
     */
    enterPathExprSegment?: (ctx: PathExprSegmentContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.pathExprSegment`.
     * @param ctx the parse tree
     */
    exitPathExprSegment?: (ctx: PathExprSegmentContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.pathIdentSegment`.
     * @param ctx the parse tree
     */
    enterPathIdentSegment?: (ctx: PathIdentSegmentContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.pathIdentSegment`.
     * @param ctx the parse tree
     */
    exitPathIdentSegment?: (ctx: PathIdentSegmentContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericArgs`.
     * @param ctx the parse tree
     */
    enterGenericArgs?: (ctx: GenericArgsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericArgs`.
     * @param ctx the parse tree
     */
    exitGenericArgs?: (ctx: GenericArgsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericArg`.
     * @param ctx the parse tree
     */
    enterGenericArg?: (ctx: GenericArgContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericArg`.
     * @param ctx the parse tree
     */
    exitGenericArg?: (ctx: GenericArgContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericArgsConst`.
     * @param ctx the parse tree
     */
    enterGenericArgsConst?: (ctx: GenericArgsConstContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericArgsConst`.
     * @param ctx the parse tree
     */
    exitGenericArgsConst?: (ctx: GenericArgsConstContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericArgsLifetimes`.
     * @param ctx the parse tree
     */
    enterGenericArgsLifetimes?: (ctx: GenericArgsLifetimesContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericArgsLifetimes`.
     * @param ctx the parse tree
     */
    exitGenericArgsLifetimes?: (ctx: GenericArgsLifetimesContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericArgsTypes`.
     * @param ctx the parse tree
     */
    enterGenericArgsTypes?: (ctx: GenericArgsTypesContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericArgsTypes`.
     * @param ctx the parse tree
     */
    exitGenericArgsTypes?: (ctx: GenericArgsTypesContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericArgsBindings`.
     * @param ctx the parse tree
     */
    enterGenericArgsBindings?: (ctx: GenericArgsBindingsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericArgsBindings`.
     * @param ctx the parse tree
     */
    exitGenericArgsBindings?: (ctx: GenericArgsBindingsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.genericArgsBinding`.
     * @param ctx the parse tree
     */
    enterGenericArgsBinding?: (ctx: GenericArgsBindingContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.genericArgsBinding`.
     * @param ctx the parse tree
     */
    exitGenericArgsBinding?: (ctx: GenericArgsBindingContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.qualifiedPathInExpression`.
     * @param ctx the parse tree
     */
    enterQualifiedPathInExpression?: (ctx: QualifiedPathInExpressionContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.qualifiedPathInExpression`.
     * @param ctx the parse tree
     */
    exitQualifiedPathInExpression?: (ctx: QualifiedPathInExpressionContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.qualifiedPathType`.
     * @param ctx the parse tree
     */
    enterQualifiedPathType?: (ctx: QualifiedPathTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.qualifiedPathType`.
     * @param ctx the parse tree
     */
    exitQualifiedPathType?: (ctx: QualifiedPathTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.qualifiedPathInType`.
     * @param ctx the parse tree
     */
    enterQualifiedPathInType?: (ctx: QualifiedPathInTypeContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.qualifiedPathInType`.
     * @param ctx the parse tree
     */
    exitQualifiedPathInType?: (ctx: QualifiedPathInTypeContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typePath`.
     * @param ctx the parse tree
     */
    enterTypePath?: (ctx: TypePathContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typePath`.
     * @param ctx the parse tree
     */
    exitTypePath?: (ctx: TypePathContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typePathSegment`.
     * @param ctx the parse tree
     */
    enterTypePathSegment?: (ctx: TypePathSegmentContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typePathSegment`.
     * @param ctx the parse tree
     */
    exitTypePathSegment?: (ctx: TypePathSegmentContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typePathFn`.
     * @param ctx the parse tree
     */
    enterTypePathFn?: (ctx: TypePathFnContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typePathFn`.
     * @param ctx the parse tree
     */
    exitTypePathFn?: (ctx: TypePathFnContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.typePathInputs`.
     * @param ctx the parse tree
     */
    enterTypePathInputs?: (ctx: TypePathInputsContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.typePathInputs`.
     * @param ctx the parse tree
     */
    exitTypePathInputs?: (ctx: TypePathInputsContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.visibility`.
     * @param ctx the parse tree
     */
    enterVisibility?: (ctx: VisibilityContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.visibility`.
     * @param ctx the parse tree
     */
    exitVisibility?: (ctx: VisibilityContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.keyword`.
     * @param ctx the parse tree
     */
    enterKeyword?: (ctx: KeywordContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.keyword`.
     * @param ctx the parse tree
     */
    exitKeyword?: (ctx: KeywordContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroIdentifierLikeToken`.
     * @param ctx the parse tree
     */
    enterMacroIdentifierLikeToken?: (ctx: MacroIdentifierLikeTokenContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroIdentifierLikeToken`.
     * @param ctx the parse tree
     */
    exitMacroIdentifierLikeToken?: (ctx: MacroIdentifierLikeTokenContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroLiteralToken`.
     * @param ctx the parse tree
     */
    enterMacroLiteralToken?: (ctx: MacroLiteralTokenContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroLiteralToken`.
     * @param ctx the parse tree
     */
    exitMacroLiteralToken?: (ctx: MacroLiteralTokenContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.macroPunctuationToken`.
     * @param ctx the parse tree
     */
    enterMacroPunctuationToken?: (ctx: MacroPunctuationTokenContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.macroPunctuationToken`.
     * @param ctx the parse tree
     */
    exitMacroPunctuationToken?: (ctx: MacroPunctuationTokenContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.shl`.
     * @param ctx the parse tree
     */
    enterShl?: (ctx: ShlContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.shl`.
     * @param ctx the parse tree
     */
    exitShl?: (ctx: ShlContext) => void;
    /**
     * Enter a parse tree produced by `RustParser.shr`.
     * @param ctx the parse tree
     */
    enterShr?: (ctx: ShrContext) => void;
    /**
     * Exit a parse tree produced by `RustParser.shr`.
     * @param ctx the parse tree
     */
    exitShr?: (ctx: ShrContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

