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

gulp.task('inject:data', function () {
    return gulp.src('./dev/data/model/projects.json')
        .pipe(inject(gulp.src('./dev/data/projects/**/*.json'), {
            starttag: '"projects": [',
            endtag: ']',
            // name: 'app',
            transform: function (filePath, file, index) {
                var content = file.contents.toString('utf8');
                return (index == 0 ? content : ',' + content)
                // return file.contents.toString('utf8')
            },
        }))
        .pipe(gulp.dest('./dev/data'));
});
