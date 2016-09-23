'use strict';

var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');

// Clean build paths
gulp.task('clean', function(cb) {

    var stream = del([
        
        paths.devRoot,
        paths.distRoot
    ]);
    return stream;
});
