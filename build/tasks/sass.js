/**
*  Compile SASS files and copy to devCss and distCss folders
*/

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var paths = require('../paths');
var cssClean = require('gulp-clean-css');

gulp.task('sass', ['clean'], function () {

    var stream = gulp.src([
        paths.srcSass + '**/*.scss'
    ])
    .pipe(sass())
    .pipe(cssClean())
    .pipe(gulp.dest(paths.devCss))
    .pipe(gulp.dest(paths.distCss));

    return stream;
});
