/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest"],
  },
  // Specify the test files to be included
  testMatch: [
    "**/__tests__/**/*.ts?(x)",
  ],
};
