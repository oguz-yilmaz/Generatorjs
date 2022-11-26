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
                targets: {
                    node: 'current',
                    // https://browsersl.ist/#q=last+2+versions
                    // Audience coverage: 90.7%
                    browsers: ['last 4 versions']
                },
                corejs: '3.7',
                useBuiltIns: 'entry',
                // jest runs in node, hence uses commonjs module style
                // otherwise we want our import/export module style
                // hence tree-shaking
                modules: isTest ? 'commonjs' : false
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [],
    sourceMaps: !isProd
}
