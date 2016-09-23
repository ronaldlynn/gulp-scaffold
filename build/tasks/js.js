'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var paths = require('../paths');

gulp.task('js', ['clean'], function () {

    var stream = gulp.src([
        paths.srcJs + '**/*.js'
    ])
    .pipe(concat('base.js'))
    .pipe(gulp.dest(paths.devJs))
    .pipe(gulp.dest(paths.distJs));

    return stream;
});
