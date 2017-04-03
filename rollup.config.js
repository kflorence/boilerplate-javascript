import babel from 'rollup-plugin-babel'

// https://rollupjs.org/
export default {
  entry: 'src/library.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  sourceMap: true,
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
