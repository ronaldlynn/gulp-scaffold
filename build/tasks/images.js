'use strict';

var gulp = require('gulp');
var paths = require('../paths');

gulp.task('images', ['clean'], function () {

    var stream = gulp.src([
            paths.srcImages + '**/*.png'
        ])
        .pipe(gulp.dest(paths.devImages))
        .pipe(gulp.dest(paths.distImages));

    return stream;
});
