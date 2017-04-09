import babel from 'rollup-plugin-babel'
import istanbul from 'rollup-plugin-istanbul'

// Bundles library for use in unit tests.
export default {
  dest: 'dist/test/library.js',
  entry: 'src/index.js',
  format: 'es',
  plugins: [
    babel({
      exclude: ['node_modules/**']
    }),
    istanbul({
      exclude: 'test/**'
    })
  ]
}
