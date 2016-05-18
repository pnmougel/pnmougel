var gulp = require('gulp');
var inject = require('gulp-inject');
var bowerFiles = require('./my-bower-files').bowerFiles;

gulp.task('ai', function () {
  var appSources = gulp.src(['./dev/app/**/*.js', '!./dev/app/config/server/*.js'], {read: false});
  var vendorSources = gulp.src(bowerFiles.ext('js').files, {read: false});
  var cssSources = gulp.src(['./dev/css/*.css', '!./css/*.min.css'], {read: false});
  var jquery = gulp.src(['dev/lib/jquery/dist/jquery.min.js'], {read: false});
  var lodash = gulp.src(['dev/lib/lodash/dist/lodash.min.js'], {read: false});

  gulp.src('./dev/index.html')
      .pipe(inject(vendorSources, {relative: true, ignorePath: '../www/', name: 'vendor'}))
      .pipe(inject(appSources, {relative: true, ignorePath: '../www/', name: 'app'}))
      .pipe(inject(cssSources, {relative: true, name: 'style'}))
      .pipe(inject(jquery, {relative: true, name: 'jquery'}))
      .pipe(inject(lodash, {relative: true, name: 'lodash'}))
      .pipe(gulp.dest('./dev'));
});
