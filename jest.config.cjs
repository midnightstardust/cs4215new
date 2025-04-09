/** jest.config.cjs */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
    moduleNameMapper: {
      '^\\.\\/(Rust(?:Parser|Lexer).*?)\\.js$': '<rootDir>/src/parser/src/$1.ts',
    },
  };
  