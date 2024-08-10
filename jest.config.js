module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@tests/(.*)": "<rootDir>/api/tests"
  },
  verbose: true
};