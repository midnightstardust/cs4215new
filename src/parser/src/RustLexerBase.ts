import { CharStream, Token, Lexer } from 'antlr4ng';
import { RustLexerConst } from './RustLexerConst';

// Abstract class equivalent to RustLexerBase in Java
export default abstract class RustLexerBase extends Lexer {
    current: Token | null = null;
    previous: Token | null = null;

    constructor(input: CharStream) {
        super(input);
    }

    // Override the nextToken function to track the previous and current tokens
    nextToken(): Token {
        const next = super.nextToken();

        if (next.channel === Token.DEFAULT_CHANNEL) {
            this.previous = this.current;
            this.current = next;
        }

        return next;
    }

    SOF(): boolean {
        return this.inputStream.LA(-1) <= 0;
    }

    // Check if the next character matches the expected character
    next(expect: string): boolean {
        return this.inputStream.LA(1) === expect.charCodeAt(0);
    }

    // Determine if a float dot is possible based on the next character
    floatDotPossible(): boolean {
        const next = this.inputStream.LA(1);

        // only block . _ identifier after float
        if (next === '.'.charCodeAt(0) || next === '_'.charCodeAt(0)) {
            return false;
        }
        if (next === 'f'.charCodeAt(0)) {
            // 1.f32
            if (this.inputStream.LA(2) === '3'.charCodeAt(0) && this.inputStream.LA(3) === '2'.charCodeAt(0)) return true;
            // 1.f64
            if (this.inputStream.LA(2) === '6'.charCodeAt(0) && this.inputStream.LA(3) === '4'.charCodeAt(0)) return true;
            return false;
        }
        if ((next >= 'a'.charCodeAt(0) && next <= 'z'.charCodeAt(0)) ||
            (next >= 'A'.charCodeAt(0) && next <= 'Z'.charCodeAt(0))) {
            return false;
        }
        return true;
    }

    // Determine if a float literal is possible based on the previous tokens
    floatLiteralPossible(): boolean {
        if (this.current === null || this.previous === null) return true;
        if (this.current.type !== RustLexerConst.DOT) return true;

        switch (this.previous.type) {
            case RustLexerConst.CHAR_LITERAL:
            case RustLexerConst.STRING_LITERAL:
            case RustLexerConst.RAW_STRING_LITERAL:
            case RustLexerConst.BYTE_LITERAL:
            case RustLexerConst.BYTE_STRING_LITERAL:
            case RustLexerConst.RAW_BYTE_STRING_LITERAL:
            case RustLexerConst.INTEGER_LITERAL:
            case RustLexerConst.DEC_LITERAL:
            case RustLexerConst.HEX_LITERAL:
            case RustLexerConst.OCT_LITERAL:
            case RustLexerConst.BIN_LITERAL:
            case RustLexerConst.KW_SUPER:
            case RustLexerConst.KW_SELFVALUE:
            case RustLexerConst.KW_SELFTYPE:
            case RustLexerConst.KW_CRATE:
            case RustLexerConst.KW_DOLLARCRATE:
            case RustLexerConst.GT:
            case RustLexerConst.RCURLYBRACE:
            case RustLexerConst.RSQUAREBRACKET:
            case RustLexerConst.RPAREN:
            case RustLexerConst.KW_AWAIT:
            case RustLexerConst.NON_KEYWORD_IDENTIFIER:
            case RustLexerConst.RAW_IDENTIFIER:
            case RustLexerConst.KW_MACRORULES:
                return false;
            default:
                return true;
        }
    }
}
