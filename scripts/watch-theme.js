'use strict';

var chokidar = require('chokidar');
var what = process.argv[2];
var extensionRe = /\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)(?:[\?#]|$)/;
var validExtension = 'es6';
var maxDepth = 4;
var excluded = ['lib/theme/theme.es6'];

var watcher = chokidar.watch(what, {
    ignored: /[\/\\]\./,
    persistent: true
});

var extension = function(path) {
    var ext = path.match(extensionRe);
    if (ext !== null) {
        return ext[1];
    }
};

var isValidExtension = function(path) {
    return (extension(path) === validExtension);
};

var hasValidDepth = function(path) {
    return ((path.match(/\//g).length + 1) <= maxDepth);
};

var isExcludedFile = function(path) {
    if (excluded.indexOf(path) !== -1) {
        return true;
    }
    return false;
};

var isValidFile = function(path) {
    return isValidExtension(path) && hasValidDepth(path) && !isExcludedFile(path);
};

var createOutPath = function(inPath) {
    return inPath.replace(/^lib\/theme/, 'lib/theme-copy-me');
};

var logError = function(error, stdout) {
    if (error) {
        console.log(stdout);
    }
};

var transform = function(inPath, outPath) {
    var pathParts = outPath.split(/\//);
    pathParts.pop();
    var dir = pathParts.join('/');
    var exec = require('child_process').exec;
    exec(['mkdir', '-p', dir].join(' '), logError);
    exec(['cp', inPath, outPath].join(' '), logError);
};

watcher
    .on('add', function(path) {
        if (isValidFile(path)) {
            console.log('watch-theme', validExtension, 'file', path, 'has been added');
            transform(path, createOutPath(path));
        }
    })
    .on('change', function(path) {
        if (isValidFile(path)) {
            console.log('watch-theme', validExtension, 'file', path, 'has been changed');
            transform(path, createOutPath(path));
        }
    });
