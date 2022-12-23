const isProd = String(process.env.NODE_ENV) === 'production'
const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
    presets: [
        [
            // Allows smart transpilation according to target environments
            // either from targets or .browserlistrc
            // They are intersected.
            '@babel/preset-env',
            {
                corejs: '3.7',
                useBuiltIns: 'usage',
                // jest runs in node, hence uses commonjs module style
                // otherwise we want our import/export module style
                // hence tree-shaking
                modules: isTest ? 'commonjs' : false
            }
        ],
        '@babel/preset-typescript'
    ],
    sourceMaps: !isProd
}
