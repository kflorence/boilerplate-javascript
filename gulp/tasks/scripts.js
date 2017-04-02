import gulp from "gulp"
import babel from "gulp-babel"

gulp.task("scripts", function scripts() {
  return gulp.src("src/**/*.js", { sourcemaps: true })
    .pipe(babel({ presets: "env" }))
    .pipe(gulp.dest("dist"))
})
