const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('build:scss', () => (
  gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest('css'))
));

gulp.task('watch', () => (
  gulp.watch('scss/**/*.scss', ['build:scss'])
));
