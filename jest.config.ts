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
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
    // '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    // '^@/(.*)$': '<rootDir>/src/$1',
  },
  // // automock: true,
};
export default config;
