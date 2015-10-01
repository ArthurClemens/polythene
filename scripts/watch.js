'use strict';
var chokidar = require('chokidar');

var watch = function(options) {
    var what = options.what;
    var ignore = options.ignore;
    var persistent = options.persistent;
    var validExtension = options.extension;
    var createOutPath = options.createOutPath;
    var transform = options.transform;
    var validPath = options.validPath || function() {return true;};
    var extensionRe = new RegExp(validExtension.replace('.', '\\.') + '$', 'g');
    var ignoreRe = new RegExp('^' + ignore);

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
            return ext[0];
        }
    };

    var isValidExtension = function(path) {
        return (extension(path) === validExtension);
    };

    var isIgnored = function(path) {
        if (!ignore) {
            return false;
        }
        return path.match(ignoreRe);
    };

    var isValidFile = function(path) {
        return validPath(path) && isValidExtension(path) && !isIgnored(path);
    };

    var doTransform = function(path) {
        execute(transform(path, createOutPath(path)));
    };

    watcher.on('change', function(path) {
        if (isValidFile(path)) {
            console.log(validExtension, 'file changed, transforming', path);
            doTransform(path);
        }
    });

    watcher.on('add', function(path) {
        if (isValidFile(path)) {
            console.log(validExtension, 'file found, transforming', path);
            doTransform(path);
        }
        watcher.unwatch(path);
    });
}

module.exports = watch;
