import path from 'path';
import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  rootDir: '../../',
  modulePaths: ['<rootDir>'],
  clearMocks: true,
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'JestEmptyComponent'),
  },
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        openReport: true,
        inlineSource: true,
        pageTitle: 'Unit tests',
      },
    ],
  ],
};

export default config;
