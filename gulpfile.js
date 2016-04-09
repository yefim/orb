var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var less = require('gulp-less');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });

  watch('index.html')
    .pipe(connect.reload());
});

gulp.task('less', function() {
  gulp.src('styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('scripts/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('styles/*.less', ['less']);
  gulp.watch('scripts/*.js', ['js']);
});

gulp.task('default', ['js', 'less', 'webserver', 'watch']);

gulp.task('jsmin', function() {
  gulp.src('scripts/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('out/dist'));
});

gulp.task('lessmin', function() {
  gulp.src('styles/*.less')
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest('out/dist'));
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('out'));
});

gulp.task('build', ['jsmin', 'lessmin', 'html']);
