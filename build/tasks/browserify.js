var gulp = require('gulp');

var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var merge = require('utils-merge')

var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')


/* nicer browserify errors */
var gutil = require('gulp-util')
var chalk = require('chalk')

function map_error(err) {
  if (err.fileName) {
    // regular error
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': '
      + 'Line '
      + chalk.magenta(err.lineNumber)
      + ' & '
      + 'Column '
      + chalk.magenta(err.columnNumber || err.column)
      + ': '
      + chalk.blue(err.description))
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message))
  }

  this.emit('end')
}

function bundle_js(bundler) {
  return bundler.bundle()
    .on('error', map_error)
    .pipe(source('index.js'))
    .pipe(rename('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist/js/'))
    .pipe(rename('bundle.min.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
      // capture sourcemaps from transforms
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dev/js/'))
    .pipe(gulp.dest('dist/js/'))
}

gulp.task('browserify', function () {
  var bundler = browserify('./src/js/index.js').transform(babelify, { presets: ['es2015', 'react'] })

  return bundler.bundle()
    .on('error', map_error)
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(rename('app.js'))
    .pipe(gulp.dest('dev/js/'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'))
})
