import babel from 'rollup-plugin-babel'

// TODO pull library name from package.json

// https://github.com/umdjs/umd
// Bundles library in UMD format for use in browser and CommonJS environments (like Node).
export default {
  dest: 'dist/library.js',
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'library',
  plugins: [
    babel({exclude: 'node_modules/**'})
  ]
}
