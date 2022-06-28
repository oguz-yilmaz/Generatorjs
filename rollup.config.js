import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const pkg = {
    name: 'Generatorjs',
    format: 'umd',
};

export default {
    input: 'src/index.js',
    output: [
        {
            ...pkg,
            file: 'dist/Generator.js',
        },
        {
            ...pkg,
            file: 'dist/Generator.min.js',
            plugins: [terser()], // minifies
        },
    ],
    plugins: [
        json(), // converts .json files to ES6 modules.
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**', // only transpile our source code
        }),
    ],
    context: 'window',
};
