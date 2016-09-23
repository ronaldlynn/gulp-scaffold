'use strict';

var gulp = require('gulp');
var paths = require('../paths');
var concat = require('gulp-concat');

gulp.task('html', ['clean'], function () {

    var stream = gulp.src([
        paths.srcHtml + '**/*.html'
    ])
    .pipe(gulp.dest(paths.devRoot))
    .pipe(gulp.dest(paths.distRoot))

    return stream;
});
