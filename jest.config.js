export default {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/tests/__mocks__/styleMock.js',
  },
};