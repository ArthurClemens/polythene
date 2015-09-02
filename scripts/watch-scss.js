'use strict';

var chokidar = require('chokidar');
var what = process.argv[2];
var ignore = (process.argv[3] && process.argv[3] !== 'null') ? process.argv[3] : null;
var persistent = !(process.argv[4] === 'once');
var extensionRe = /\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)(?:[\?#]|$)/;
var underscoreRe = /(_[\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)(?:[\?#]|$)/;
var validExtension = 'scss';
var isWin = /^win/.test(process.platform);

var watcher = chokidar.watch(what, {
    ignored: /[\/\\]\./,
    persistent: persistent
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
    if (!ignore) {
        return false;
    }
    var ignoreRe = new RegExp('^' + ignore);
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

var isValidFile = function(path) {
    return (!isIgnored(path) && isValidExtension(path) && !hasUnderscore(path));
};

var createOutPath = function(inPath) {
    return inPath.replace(/scss$/, 'css');
};

var transform = function(inPath, outPath) {
    var delimiter = isWin ? '\\' : '/';
    var pathParts = inPath.split(delimiter);
    var inFileName = pathParts.pop();
    var dir = pathParts.join('/');
    var outPathParts = outPath.split(delimiter);
    var outFileName = outPathParts.pop();
    var cmd = [
        'cd', dir,
        '&&',
        'sass --sourcemap=none --style=expanded', inFileName, '>', outFileName,
        '&&',
        'postcss -u autoprefixer --autoprefixer.browsers "last 2 versions" -o', outFileName, outFileName,
        '&&',
        'cleancss', '-o', outFileName, outFileName
    ].join(' ');
    execute(cmd);
};


if (persistent) {
    watcher.on('change', function(path) {
        if (isValidFile(path)) {
            console.log(validExtension, 'file changed, transpiling', path);
            transform(path, createOutPath(path));
        }
    });
} else {
    watcher.on('add', function(path) {
        if (isValidFile(path)) {
            console.log(validExtension, 'file found, transpiling', path);
            transform(path, createOutPath(path));
            watcher.unwatch(path);
        }
    });
}
