const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('tasks');

gulp.task('default', ['connect', 'watch']);
