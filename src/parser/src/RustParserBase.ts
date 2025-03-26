import { Parser, TokenStream } from 'antlr4ng';

export default abstract class RustParserBase extends Parser {
    constructor(input: TokenStream) {
        super(input);
    }

    next(expect: string): boolean {
        return this.inputStream.LA(1) === expect.charCodeAt(0);
    }
}
