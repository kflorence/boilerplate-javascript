import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import istanbul from 'rollup-plugin-istanbul'
import resolve from 'rollup-plugin-node-resolve'

// https://rollupjs.org/
export default {
  entry: 'src/index.js',
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    istanbul({
      exclude: ['test/**/*']
    })
  ],
  sourceMap: false,
  targets: [
    {
      dest: 'dist/library.js',
      format: 'umd',
      moduleName: 'library'
    },
    {
      dest: 'dist/library.es.js',
      format: 'es'
    }
  ]
}
