import babel from 'rollup-plugin-babel'

// http://jsmodules.io/
// Bundles library as an EcmaScript6 module.
export default {
  dest: 'dist/library.es.js',
  entry: 'src/index.js',
  format: 'es',
  plugins: [
    babel({exclude: 'node_modules/**'})
  ]
}
