'use strict';

var chokidar = require('chokidar');
var what = process.argv[2];
var extensionRe = /\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)(?:[\?#]|$)/;
var validExtension = 'md';
var maxDepth = 4;

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

var isValidExtension = function(path) {
    return (extension(path) === validExtension);
};

var hasValidDepth = function(path) {
    return ((path.match(/\//g).length + 1) <= maxDepth);
};

var isValidFile = function(path) {
    return (isValidExtension(path) && hasValidDepth(path));
};

var transform = function(path) {
    var pathParts = path.split(/\//);
    var fileName = pathParts.pop();
    var outPath = 'src/app/docs/' + fileName;

    execute([
        'cp', path, outPath
    ].join(' '));
};

watcher
    .on('add', function(path) {
        if (isValidFile(path)) {
            console.log('watch-doc', validExtension, 'file', path, 'has been added');
            transform(path);
        }
    })
    .on('change', function(path) {
        if (isValidFile(path)) {
            console.log('watch-doc', validExtension, 'file', path, 'has been changed');
            transform(path);
        }
    });
