
var gulp = require('gulp');
var bowerFiles = require('./my-bower-files').bowerFiles;
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');

var fs = require("fs");

gulp.task('clean-build',
    shell.task('rm -Rf www/app www/css www/fonts www/js && rm -f www/index.html && mkdir www/css')
);

gulp.task('minify-js', function() {
    // Concat and minify the js files
    gulp.src(bowerFiles.match('!**/jquery.js', '!dev/lib/lodash/**/*.js', '!**/lodash.js').ext('js').files)
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js/'));

    gulp.src(['./dev/app/**/*.js', '!./dev/app/config/local/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('www/js/'));
});

gulp.task('copy-html', function () {
    return gulp.src('./dev/app/**/*.html').pipe(gulp.dest('www/app/'));
});

gulp.task('copy-jquery', function () {
    return gulp.src('./dev/lib/jquery/dist/jquery.min.js').pipe(gulp.dest('www/js/'));
});

gulp.task('copy-lodash', function () {
    return gulp.src('./dev/lib/lodash/dist/lodash.min.js').pipe(gulp.dest('www/js/'));
});

gulp.task('copy-index', function () {
    return gulp.src('./dev/index.html').pipe(gulp.dest('www/'));
});

gulp.task('copy-resources', function () {
    gulp.src('./dev/images/*').pipe(gulp.dest('www/images'));
    gulp.src('./dev/fonts/*').pipe(gulp.dest('www/fonts'));
    return gulp.src('./dev/icons/*').pipe(gulp.dest('www/icons'));
});

gulp.task('copy', ['copy-index', 'copy-resources', 'copy-html', 'copy-jquery', 'copy-lodash']);

gulp.task('inject', function () {
    var vendorSources = gulp.src(['www/js/lib.min.js'], {read: false});
    var sources = gulp.src(['www/js/app.min.js'], {read: false});
    var jquery = gulp.src(['www/js/jquery.min.js'], {read: false});
    var lodash = gulp.src(['www/js/lodash.min.js'], {read: false});
    var cssSources = gulp.src(['www/css/*.css'], {read: false});

    gulp.src('www/index.html')
        .pipe(inject(vendorSources, {relative: false, name: 'vendor', ignorePath: 'www/', addRootSlash: false}))
        .pipe(inject(sources, {relative: false, name: 'app', ignorePath: 'www/', addRootSlash: false}))
        .pipe(inject(jquery, {relative: false, name: 'jquery', ignorePath: 'www/', addRootSlash: false}))
        .pipe(inject(lodash, {relative: false, name: 'lodash', ignorePath: 'www/', addRootSlash: false}))
        .pipe(inject(cssSources, {relative: true, name: 'style'}))
        .pipe(gulp.dest('www'))
});

gulp.task('build', function (done) {
    runSequence(
        ['clean-build', 'sass:build', 'minify-js'],
        'copy',
        'inject',
        done
    );
});
