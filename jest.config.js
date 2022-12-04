module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    clearMocks: true,
    setupFilesAfterEnv: ['./test/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '@generatorjs': '<rootDir>/src/generatorjs/index.ts',
        '@generator': '<rootDir>/src/index.ts',
        '@utils': '<rootDir>/src/utils.ts',
        '^@dom/(.*)$': '<rootDir>/src/dom/$1',
        '@dom': '<rootDir>/src/dom/index.ts',
        '@constants': '<rootDir>/src/constants.ts',
        '^types/(.*)$': '<rootDir>/src/types/$1',
        '^types$': '<rootDir>/src/types/index.ts'
    },
    collectCoverage: true,
    coverageReporters: ['html'],
    moduleDirectories: ['node_modules']
}
