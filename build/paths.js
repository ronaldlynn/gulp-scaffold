'use strict';

/**
*  This file (build/paths.js) is a NodeJS module that exports all file paths
*  used by the GulpJS build system.
*/

var bcRoot = 'bower_components/';
var srcRoot = 'src/';
var devRoot = 'dev/';
var distRoot = 'dist/';

var htmlPath = 'html/';
var sassPath = 'sass/';
var cssPath = 'css/';
var jsPath = 'js/';
var imagePath = 'images/';

var srcHtml = srcRoot + htmlPath;
var devHtml = devRoot;
var distHtml = distRoot;

var srcSass = srcRoot + sassPath;
var devCss = devRoot + cssPath;
var distCss = distRoot + cssPath;

var srcJs = srcRoot + jsPath;
var devJs = devRoot + jsPath;
var distJs = distRoot + jsPath;

var srcImages = srcRoot + imagePath;
var devImages = devRoot + imagePath;
var distImages = distRoot + imagePath;

module.exports = {

    bcRoot: bcRoot,
    srcRoot: srcRoot,
    devRoot: devRoot,
    distRoot: distRoot,

    srcHtml: srcHtml,
    devHtml: devHtml,
    distHtml: distHtml,

    srcSass: srcSass,
    devCss: devCss,
    distCss: distCss,

    srcJs: srcJs,
    devJs: devJs,
    distJs: distJs,

    srcImages: srcImages,
    devImages: devImages,
    distImages: distImages
};
