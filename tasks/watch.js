var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('dev/app/**/*.html', ['ai', 'reload']);
    gulp.watch('dev/app/**/*.js', ['ai', 'reload']);
    gulp.watch('dev/css/*.css', ['ai', 'reload']);
    gulp.watch('dev/lib/**/.js', ['ai', 'reload']);
    gulp.watch('dev/app/**/*.scss', ['inject:sass', 'sass']);
    gulp.watch('dev/scss/**/*.scss', ['inject:sass', 'sass']);
    gulp.watch('bower.json', ['ai']);
    gulp.watch('dev/data/projects/**/*.json', ['inject:data', 'reload']);
});