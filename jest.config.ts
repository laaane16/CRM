import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  globals: {
    __PROJECT__: 'jest',
  },
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  rootDir: './',
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>src'],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    // '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    // '^@/(.*)$': '<rootDir>/src/$1',
  },
  // reporters: [
  //   'default',
  //   [
  //     'jest-html-reporters',
  //     {
  //       publicPath: '<rootDir>/reports/unit',
  //       filename: 'report.html',
  //       // openReport: true,
  //       inlineSource: true,
  //     },
  //   ],
  // ],
  // preset: 'ts-jest',
  // testEnvironment: 'node',
  // verbose: true,
  // // automock: true,
};
export default config;
