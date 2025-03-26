// Generated from src/RustParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class RustParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `RustParser.crate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCrate?: (ctx: CrateContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroInvocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroInvocation?: (ctx: MacroInvocationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.delimTokenTree`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDelimTokenTree?: (ctx: DelimTokenTreeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tokenTree`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTokenTree?: (ctx: TokenTreeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tokenTreeToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTokenTreeToken?: (ctx: TokenTreeTokenContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroInvocationSemi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroInvocationSemi?: (ctx: MacroInvocationSemiContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroRulesDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroRulesDefinition?: (ctx: MacroRulesDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroRulesDef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroRulesDef?: (ctx: MacroRulesDefContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroRules`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroRules?: (ctx: MacroRulesContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroRule`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroRule?: (ctx: MacroRuleContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroMatcher`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroMatcher?: (ctx: MacroMatcherContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroMatch`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroMatch?: (ctx: MacroMatchContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroMatchToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroMatchToken?: (ctx: MacroMatchTokenContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroFragSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroFragSpec?: (ctx: MacroFragSpecContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroRepSep`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroRepSep?: (ctx: MacroRepSepContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroRepOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroRepOp?: (ctx: MacroRepOpContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroTranscriber`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroTranscriber?: (ctx: MacroTranscriberContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.item`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitItem?: (ctx: ItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.visItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVisItem?: (ctx: VisItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroItem?: (ctx: MacroItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.module`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModule?: (ctx: ModuleContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.externCrate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternCrate?: (ctx: ExternCrateContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.crateRef`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCrateRef?: (ctx: CrateRefContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.asClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsClause?: (ctx: AsClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.useDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseDeclaration?: (ctx: UseDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.useTree`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseTree?: (ctx: UseTreeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.function_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_?: (ctx: Function_Context) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionQualifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionQualifiers?: (ctx: FunctionQualifiersContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.abi`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAbi?: (ctx: AbiContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.selfParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelfParam?: (ctx: SelfParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.shorthandSelf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShorthandSelf?: (ctx: ShorthandSelfContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typedSelf`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypedSelf?: (ctx: TypedSelfContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParam?: (ctx: FunctionParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionParamPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParamPattern?: (ctx: FunctionParamPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionReturnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionReturnType?: (ctx: FunctionReturnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typeAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeAlias?: (ctx: TypeAliasContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.struct_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStruct_?: (ctx: Struct_Context) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structStruct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructStruct?: (ctx: StructStructContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleStruct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleStruct?: (ctx: TupleStructContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructFields?: (ctx: StructFieldsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructField?: (ctx: StructFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleFields?: (ctx: TupleFieldsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleField?: (ctx: TupleFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumeration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumeration?: (ctx: EnumerationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumItems`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumItems?: (ctx: EnumItemsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumItem?: (ctx: EnumItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumItemTuple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumItemTuple?: (ctx: EnumItemTupleContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumItemStruct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumItemStruct?: (ctx: EnumItemStructContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumItemDiscriminant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumItemDiscriminant?: (ctx: EnumItemDiscriminantContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.union_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnion_?: (ctx: Union_Context) => Result;
    /**
     * Visit a parse tree produced by `RustParser.constantItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantItem?: (ctx: ConstantItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.staticItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStaticItem?: (ctx: StaticItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.trait_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrait_?: (ctx: Trait_Context) => Result;
    /**
     * Visit a parse tree produced by `RustParser.implementation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplementation?: (ctx: ImplementationContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.inherentImpl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInherentImpl?: (ctx: InherentImplContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.traitImpl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTraitImpl?: (ctx: TraitImplContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.externBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternBlock?: (ctx: ExternBlockContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.externalItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExternalItem?: (ctx: ExternalItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericParams?: (ctx: GenericParamsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericParam?: (ctx: GenericParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.lifetimeParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLifetimeParam?: (ctx: LifetimeParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typeParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParam?: (ctx: TypeParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.constParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstParam?: (ctx: ConstParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.whereClauseItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClauseItem?: (ctx: WhereClauseItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.lifetimeWhereClauseItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLifetimeWhereClauseItem?: (ctx: LifetimeWhereClauseItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typeBoundWhereClauseItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeBoundWhereClauseItem?: (ctx: TypeBoundWhereClauseItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.forLifetimes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForLifetimes?: (ctx: ForLifetimesContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.associatedItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssociatedItem?: (ctx: AssociatedItemContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.innerAttribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInnerAttribute?: (ctx: InnerAttributeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.outerAttribute`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOuterAttribute?: (ctx: OuterAttributeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.attr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttr?: (ctx: AttrContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.attrInput`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttrInput?: (ctx: AttrInputContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.letStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStatement?: (ctx: LetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expressionStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `TypeCastExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeCastExpression?: (ctx: TypeCastExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `PathExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathExpression_?: (ctx: PathExpression_Context) => Result;
    /**
     * Visit a parse tree produced by the `TupleExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleExpression?: (ctx: TupleExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `IndexExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIndexExpression?: (ctx: IndexExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `RangeExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRangeExpression?: (ctx: RangeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `MacroInvocationAsExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroInvocationAsExpression?: (ctx: MacroInvocationAsExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ReturnExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnExpression?: (ctx: ReturnExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `AwaitExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAwaitExpression?: (ctx: AwaitExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ErrorPropagationExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorPropagationExpression?: (ctx: ErrorPropagationExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ContinueExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitContinueExpression?: (ctx: ContinueExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `AssignmentExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `MethodCallExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodCallExpression?: (ctx: MethodCallExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `LiteralExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpression_?: (ctx: LiteralExpression_Context) => Result;
    /**
     * Visit a parse tree produced by the `StructExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExpression_?: (ctx: StructExpression_Context) => Result;
    /**
     * Visit a parse tree produced by the `TupleIndexingExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleIndexingExpression?: (ctx: TupleIndexingExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `NegationExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNegationExpression?: (ctx: NegationExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `CallExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallExpression?: (ctx: CallExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `LazyBooleanExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLazyBooleanExpression?: (ctx: LazyBooleanExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `DereferenceExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereferenceExpression?: (ctx: DereferenceExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ExpressionWithBlock_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionWithBlock_?: (ctx: ExpressionWithBlock_Context) => Result;
    /**
     * Visit a parse tree produced by the `GroupedExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupedExpression?: (ctx: GroupedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `BreakExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreakExpression?: (ctx: BreakExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ArithmeticOrLogicalExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticOrLogicalExpression?: (ctx: ArithmeticOrLogicalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `FieldExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldExpression?: (ctx: FieldExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `EnumerationVariantExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumerationVariantExpression_?: (ctx: EnumerationVariantExpression_Context) => Result;
    /**
     * Visit a parse tree produced by the `ComparisonExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonExpression?: (ctx: ComparisonExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `AttributedExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAttributedExpression?: (ctx: AttributedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `BorrowExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBorrowExpression?: (ctx: BorrowExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `CompoundAssignmentExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompoundAssignmentExpression?: (ctx: CompoundAssignmentExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `ClosureExpression_`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosureExpression_?: (ctx: ClosureExpression_Context) => Result;
    /**
     * Visit a parse tree produced by the `ArrayExpression`
     * labeled alternative in `RustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.compoundAssignOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompoundAssignOperator?: (ctx: CompoundAssignOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.expressionWithBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionWithBlock?: (ctx: ExpressionWithBlockContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.pathExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathExpression?: (ctx: PathExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.blockExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockExpression?: (ctx: BlockExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.statements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatements?: (ctx: StatementsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.asyncBlockExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsyncBlockExpression?: (ctx: AsyncBlockExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.unsafeBlockExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnsafeBlockExpression?: (ctx: UnsafeBlockExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.arrayElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayElements?: (ctx: ArrayElementsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleElements?: (ctx: TupleElementsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleIndex`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleIndex?: (ctx: TupleIndexContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExpression?: (ctx: StructExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structExprStruct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExprStruct?: (ctx: StructExprStructContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structExprFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExprFields?: (ctx: StructExprFieldsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structExprField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExprField?: (ctx: StructExprFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structBase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructBase?: (ctx: StructBaseContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structExprTuple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExprTuple?: (ctx: StructExprTupleContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structExprUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExprUnit?: (ctx: StructExprUnitContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumerationVariantExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumerationVariantExpression?: (ctx: EnumerationVariantExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumExprStruct`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumExprStruct?: (ctx: EnumExprStructContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumExprFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumExprFields?: (ctx: EnumExprFieldsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumExprField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumExprField?: (ctx: EnumExprFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumExprTuple`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumExprTuple?: (ctx: EnumExprTupleContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.enumExprFieldless`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumExprFieldless?: (ctx: EnumExprFieldlessContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.callParams`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCallParams?: (ctx: CallParamsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.closureExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosureExpression?: (ctx: ClosureExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.closureParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosureParameters?: (ctx: ClosureParametersContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.closureParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClosureParam?: (ctx: ClosureParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.loopExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopExpression?: (ctx: LoopExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.infiniteLoopExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInfiniteLoopExpression?: (ctx: InfiniteLoopExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.predicateLoopExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicateLoopExpression?: (ctx: PredicateLoopExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.predicatePatternLoopExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicatePatternLoopExpression?: (ctx: PredicatePatternLoopExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.iteratorLoopExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIteratorLoopExpression?: (ctx: IteratorLoopExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.loopLabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoopLabel?: (ctx: LoopLabelContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.ifExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExpression?: (ctx: IfExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.ifLetExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfLetExpression?: (ctx: IfLetExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.matchExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchExpression?: (ctx: MatchExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.matchArms`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchArms?: (ctx: MatchArmsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.matchArmExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchArmExpression?: (ctx: MatchArmExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.matchArm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchArm?: (ctx: MatchArmContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.matchArmGuard`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchArmGuard?: (ctx: MatchArmGuardContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.pattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPattern?: (ctx: PatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.patternNoTopAlt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternNoTopAlt?: (ctx: PatternNoTopAltContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.patternWithoutRange`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternWithoutRange?: (ctx: PatternWithoutRangeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.literalPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralPattern?: (ctx: LiteralPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.identifierPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierPattern?: (ctx: IdentifierPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.wildcardPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWildcardPattern?: (ctx: WildcardPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.restPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRestPattern?: (ctx: RestPatternContext) => Result;
    /**
     * Visit a parse tree produced by the `InclusiveRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInclusiveRangePattern?: (ctx: InclusiveRangePatternContext) => Result;
    /**
     * Visit a parse tree produced by the `HalfOpenRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHalfOpenRangePattern?: (ctx: HalfOpenRangePatternContext) => Result;
    /**
     * Visit a parse tree produced by the `ObsoleteRangePattern`
     * labeled alternative in `RustParser.rangePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObsoleteRangePattern?: (ctx: ObsoleteRangePatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.rangePatternBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRangePatternBound?: (ctx: RangePatternBoundContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.referencePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferencePattern?: (ctx: ReferencePatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructPattern?: (ctx: StructPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structPatternElements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructPatternElements?: (ctx: StructPatternElementsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structPatternFields`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructPatternFields?: (ctx: StructPatternFieldsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structPatternField`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructPatternField?: (ctx: StructPatternFieldContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.structPatternEtCetera`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructPatternEtCetera?: (ctx: StructPatternEtCeteraContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleStructPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleStructPattern?: (ctx: TupleStructPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleStructItems`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleStructItems?: (ctx: TupleStructItemsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tuplePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTuplePattern?: (ctx: TuplePatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tuplePatternItems`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTuplePatternItems?: (ctx: TuplePatternItemsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.groupedPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupedPattern?: (ctx: GroupedPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.slicePattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSlicePattern?: (ctx: SlicePatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.slicePatternItems`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSlicePatternItems?: (ctx: SlicePatternItemsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.pathPattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathPattern?: (ctx: PathPatternContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.type_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType_?: (ctx: Type_Context) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typeNoBounds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeNoBounds?: (ctx: TypeNoBoundsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.parenthesizedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.neverType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNeverType?: (ctx: NeverTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.tupleType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleType?: (ctx: TupleTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.arrayType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayType?: (ctx: ArrayTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.sliceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSliceType?: (ctx: SliceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.referenceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReferenceType?: (ctx: ReferenceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.rawPointerType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRawPointerType?: (ctx: RawPointerTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.bareFunctionType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBareFunctionType?: (ctx: BareFunctionTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionTypeQualifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionTypeQualifiers?: (ctx: FunctionTypeQualifiersContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.bareFunctionReturnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBareFunctionReturnType?: (ctx: BareFunctionReturnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.functionParametersMaybeNamedVariadic`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParametersMaybeNamedVariadic?: (ctx: FunctionParametersMaybeNamedVariadicContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.maybeNamedFunctionParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaybeNamedFunctionParameters?: (ctx: MaybeNamedFunctionParametersContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.maybeNamedParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaybeNamedParam?: (ctx: MaybeNamedParamContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.maybeNamedFunctionParametersVariadic`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaybeNamedFunctionParametersVariadic?: (ctx: MaybeNamedFunctionParametersVariadicContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.traitObjectType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTraitObjectType?: (ctx: TraitObjectTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.traitObjectTypeOneBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTraitObjectTypeOneBound?: (ctx: TraitObjectTypeOneBoundContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.implTraitType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplTraitType?: (ctx: ImplTraitTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.implTraitTypeOneBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImplTraitTypeOneBound?: (ctx: ImplTraitTypeOneBoundContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.inferredType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInferredType?: (ctx: InferredTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typeParamBounds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParamBounds?: (ctx: TypeParamBoundsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typeParamBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParamBound?: (ctx: TypeParamBoundContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.traitBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTraitBound?: (ctx: TraitBoundContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.lifetimeBounds`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLifetimeBounds?: (ctx: LifetimeBoundsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.lifetime`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLifetime?: (ctx: LifetimeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.simplePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplePath?: (ctx: SimplePathContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.simplePathSegment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimplePathSegment?: (ctx: SimplePathSegmentContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.pathInExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathInExpression?: (ctx: PathInExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.pathExprSegment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathExprSegment?: (ctx: PathExprSegmentContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.pathIdentSegment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPathIdentSegment?: (ctx: PathIdentSegmentContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericArgs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericArgs?: (ctx: GenericArgsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericArg`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericArg?: (ctx: GenericArgContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericArgsConst`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericArgsConst?: (ctx: GenericArgsConstContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericArgsLifetimes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericArgsLifetimes?: (ctx: GenericArgsLifetimesContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericArgsTypes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericArgsTypes?: (ctx: GenericArgsTypesContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericArgsBindings`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericArgsBindings?: (ctx: GenericArgsBindingsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.genericArgsBinding`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericArgsBinding?: (ctx: GenericArgsBindingContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.qualifiedPathInExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedPathInExpression?: (ctx: QualifiedPathInExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.qualifiedPathType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedPathType?: (ctx: QualifiedPathTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.qualifiedPathInType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedPathInType?: (ctx: QualifiedPathInTypeContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypePath?: (ctx: TypePathContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typePathSegment`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypePathSegment?: (ctx: TypePathSegmentContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typePathFn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypePathFn?: (ctx: TypePathFnContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.typePathInputs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypePathInputs?: (ctx: TypePathInputsContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.visibility`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVisibility?: (ctx: VisibilityContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyword?: (ctx: KeywordContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroIdentifierLikeToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroIdentifierLikeToken?: (ctx: MacroIdentifierLikeTokenContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroLiteralToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroLiteralToken?: (ctx: MacroLiteralTokenContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.macroPunctuationToken`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMacroPunctuationToken?: (ctx: MacroPunctuationTokenContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.shl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShl?: (ctx: ShlContext) => Result;
    /**
     * Visit a parse tree produced by `RustParser.shr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShr?: (ctx: ShrContext) => Result;
}

