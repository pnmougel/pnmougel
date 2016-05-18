var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./dev/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dev/css'));
});

gulp.task('sass:build', function () {
    return gulp.src('./dev/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./www/css'));
});
