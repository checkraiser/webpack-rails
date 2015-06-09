var gulp = require('gulp'),
webpack = require('gulp-webpack');

gulp.task("webpack", function() {
  return gulp.src("client/entry.js")
  .pipe(webpack(require("./webpack.config.js")))
  .pipe(gulp.dest("app/assets/javascripts/"));
});

gulp.task("watch", function() {
  gulp.watch(["./client/**/*.js", "!app/assets/javascripts/bundle.js", "./client/**/*.jsx"], ["webpack"]);
});

gulp.task("default", ["watch"]);
