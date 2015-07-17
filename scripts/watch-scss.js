'use strict';

var chokidar = require('chokidar');
var what = process.argv[2];
var ignore = process.argv[3];
var extensionRe = /\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)(?:[\?#]|$)/;
var underscoreRe = /(_[\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)(?:[\?#]|$)/;
var validExtension = 'scss';
var maxDepth = 5;

var watcher = chokidar.watch(what, {
    ignored: /[\/\\]\./,
    persistent: true
});

var execute = function(command) {
    var exec = require('child_process').exec;
    var logError = function(error, stdout) {
        if (error && stdout) {
            console.log(error, stdout);
        }
    };
    exec(command, logError);
};

var extension = function(path) {
    var ext = path.match(extensionRe);
    if (ext !== null) {
        return ext[1];
    }
};

var isIgnored = function(path) {
    if (!ignore) return false;
    var ignoreRe = new RegExp("^" + ignore);
    return path.match(ignoreRe);
};

var isValidExtension = function(path) {
    return (extension(path) === validExtension);
};

var hasUnderscore = function(path) {
    var fileWithUnderscore = path.match(underscoreRe);
    if (fileWithUnderscore !== null) {
        return true;
    }
    return false;
};

var hasValidDepth = function(path) {
    return ((path.match(/\//g).length + 1) <= maxDepth);
};

var isValidFile = function(path) {
    return (!isIgnored(path) && isValidExtension(path) && hasValidDepth(path) && !hasUnderscore(path));
};

var createOutPath = function(inPath) {
    return inPath.replace(/scss$/, 'css');
};

var transform = function(inPath, outPath) {
    var pathParts = inPath.split(/\//);
    var inFileName = pathParts.pop();
    var dir = pathParts.join('/');
    var outPathParts = outPath.split(/\//);
    var outFileName = outPathParts.pop();
    execute([
        'cd', dir,
        '&&',
        'sass --sourcemap=none', inFileName, '>', outFileName,
        '&&',
        'autoprefixer -b \'last 2 versions\'', outFileName,
        '&&',
        'cleancss', '-o', outFileName, outFileName
    ].join(' '));
};

watcher
    .on('add', function(path) {
        if (isValidFile(path)) {
            console.log('watch-scss', validExtension, 'file', path, 'has been added');
            transform(path, createOutPath(path));
        }
    })
    .on('change', function(path) {
        if (isValidFile(path)) {
            console.log('watch-scss', validExtension, 'file', path, 'has been changed');
            transform(path, createOutPath(path));
        }
    });
