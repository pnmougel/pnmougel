const gulp = require('gulp');
const inject = require('gulp-inject');

gulp.task('inject:sass', function () {
    return gulp.src('./dev/scss/main.scss')
        .pipe(inject(gulp.src('./dev/app/**/*.scss', {read: false}), {
            ignorePath: '/dev/',
            starttag: '/* app */',
            endtag: '/* end */',
            // name: 'app',
            transform: function (filePath) {
                return '@import "..' + filePath.slice(0, -5) + '";';
            },
        }))
        .pipe(gulp.dest('./dev/scss/'));
});
