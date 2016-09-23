'use strict';

var gulp = require('gulp'),
    paths = require('../paths'),
    serve = require('gulp-serve');

// Run a dev server and watch for changes
gulp.task('serve', ['watch'], serve({
    root: [ paths.devRoot ],
    port: 30080
}));
