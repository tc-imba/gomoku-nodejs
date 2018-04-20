import gulp from 'gulp';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';
import concat from 'gulp-concat';
import Cache from 'gulp-file-cache';

const cache = new Cache();

gulp.task('main', () => {
  return gulp.src('./src/**/*.js').
    pipe(plumber()).
    pipe(cache.filter()).
    pipe(eslint()).
    pipe(eslint.format()).
    pipe(babel()).
    pipe(cache.cache()).
    pipe(concat('main.js')).
    pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.series('main'));
