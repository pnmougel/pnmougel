var gulp = require('gulp');
var GulpSSH = require('gulp-ssh');
var fs = require('fs');
var runSequence = require('run-sequence');

var sshConfig = {
    host: 'nuata.io',
    port: 22,
    username: 'nico',
    privateKey: fs.readFileSync('/home/nico/.ssh/id_rsa'),
    passphrase: fs.readFileSync('/home/nico/.ssh/id_rsa.passphrase').toString().trim()
};


var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: sshConfig
});


gulp.task('deploy', function (done) {
    runSequence(
        'build',
        'send',
        'send-index',
        done
    );
});


gulp.task('deploy-all', function (done) {
    runSequence(
        'build',
        'send-all',
        'send-index',
        done
    );
});

gulp.task('send', function () {
    return gulp.src(['./www/**', '!./www/images/**', '!./www/images/**', '!./www/fonts/**'])
        .pipe(gulpSSH.dest('/home/nico/pnmougel/'))
});

gulp.task('send-all', function () {
    return gulp.src(['./www/**'])
        .pipe(gulpSSH.dest('/home/nico/pnmougel/'))
});

gulp.task('send-index', function () {
    return gulp.src(['./www/index.html'])
        .pipe(gulpSSH.dest('/home/nico/pnmougel/'))
});