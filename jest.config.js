const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')

module.exports = {
    // preset: 'ts-jest',
    clearMocks: true,
    setupFilesAfterEnv: ['./test/jest.setup.js'],
    // modulePaths: [__dirname + '/src'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '@generatorjs': '<rootDir>/src/generatorjs/index.ts',
        '@generator': '<rootDir>/src/index.ts',
        '@utils': '<rootDir>/src/utils.ts',
        '@dom-utils': '<rootDir>/src/dom-utils.ts',
        '@constants': '<rootDir>/src/constants.ts'
    },
    moduleDirectories: ['node_modules']
}
