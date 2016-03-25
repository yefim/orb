var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('less', function() {
  gulp.src('styles/*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('scripts/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('styles/*.less', ['less']);
  gulp.watch('scripts/*.js', ['js']);
});

gulp.task('default', ['js', 'less', 'webserver', 'watch']);
