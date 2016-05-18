var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('reload', function () {
    gulp.src(['./dev/**/*.html', './dev/app/**/*.js', './dev/css/*.css'])
        .pipe(connect.reload());
});

gulp.task('connect', function () {
    connect.server({
        root: 'dev',
        livereload: {
            port: 35730
        },
        port: 4000
    });
});



