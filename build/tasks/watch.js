'use strict';

var gulp = require('gulp');
var paths = require('../paths');

gulp.task('watch', ['sass', 'js', 'images', 'html'], function () {

    gulp.watch(paths.srcSass + '**/*.scss', ['build']);
    gulp.watch(paths.srcJs + '**/*.js', ['build']);
    gulp.watch(paths.srcImages + '**/*.*', ['build']);
    gulp.watch(paths.srcHtml + '**/*.html', ['build']);
});
