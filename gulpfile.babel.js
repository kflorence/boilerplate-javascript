import gulp from "gulp"
import TaskRegistry from "gulp-hub"

const tasks = new TaskRegistry(["./gulp/tasks/**/*.js"])

gulp.registry(tasks)
