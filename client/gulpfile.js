const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


gulp.task('build:scss', () => (
  gulp.src('scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS())
  .pipe(gulp.dest('css'))
));

gulp.task('build:js', () =>
  gulp.src('js.es6/**/*.js')
  .pipe(babel({
      presets: ['es2015']
  }))
  .pipe(uglify())
  .pipe(gulp.dest('js'))
);

gulp.task('build', ['build:scss', 'build:js']);

gulp.task('watch', () => {
  gulp.watch('scss/**/*.scss', ['build:scss']);
  gulp.watch('js.es6/**/*.js', ['build:js']);
});
