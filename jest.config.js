module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    moduleFileExtensions: ['js', 'json', 'ts'],
    clearMocks: true,
    setupFilesAfterEnv: ['./test/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '@generatorjs': '<rootDir>/src/generatorjs/index',
        '@generator': '<rootDir>/src/index',
        '@utils': '<rootDir>/src/utils.ts',
        '^@dom/(.*)$': '<rootDir>/src/dom/$1',
        '@dom': '<rootDir>/src/dom/index',
        '@constants': '<rootDir>/src/constants.ts',
        '^types/(.*)$': '<rootDir>/src/types/$1',
        '^types$': '<rootDir>/src/types/create.ts'
    },
    collectCoverage: true,
    coverageReporters: ['html'],
    moduleDirectories: ['node_modules', 'src']
}
