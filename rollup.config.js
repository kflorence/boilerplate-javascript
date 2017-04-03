import babel from "rollup-plugin-babel"

// Rollup configuration
export default {
  entry: "src/library.js",
  format: "umd",
  moduleName: "library",
  plugins: [
    babel({ exclude: "node_modules/**" })
  ],
  sourceMap: true,
  targets: [
    { dest: "dist/library.js", format: "umd" },
    { dest: "dist/library.es.js", format: "es" }
  ]
}
