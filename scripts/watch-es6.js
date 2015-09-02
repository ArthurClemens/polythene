'use strict';

var chokidar = require('chokidar');
var what = process.argv[2];
var ignore = (process.argv[3] && process.argv[3] !== 'null') ? process.argv[3] : null;
var persistent = !(process.argv[4] === 'once');
var extensionRe = /\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_.\d]{1,})$/;
var validExtension = 'es6.js';

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

var isValidFile = function(path) {
    return isValidExtension(path) && !isIgnored(path);
};

var createOutPath = function(inPath) {
    return inPath.replace(/es6.js$/, 'js');
};

var transform = function(inPath, outPath) {
    execute([
        'babel', inPath, '>', outPath,
        '&&',
        'uglifyjs', '-o', outPath, outPath
    ].join(' '));
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
