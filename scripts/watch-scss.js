'use strict';

var watch = require('./watch');
var underscoreRe = /(_[\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)\.([\u00C0-\u1FFF\u2C00-\uD7FF\w-_]+)(?:[\?#]|$)/;
var isWin = /^win/.test(process.platform);

watch ({
    what: process.argv[2],
    ignore: (process.argv[3] && process.argv[3] !== 'null') ? process.argv[3] : null,
    persistent: !(process.argv[4] === 'once'),
    extension: 'scss',
    createOutPath: function(inPath) {
        return inPath.replace(/scss$/, 'css');
    },
    transform: function(inPath, outPath) {
        var delimiter = isWin ? '\\' : '/';
        var pathParts = inPath.split(delimiter);
        var inFileName = pathParts.pop();
        var dir = pathParts.join('/');
        var outPathParts = outPath.split(delimiter);
        var outFileName = outPathParts.pop();
        return [
            'cd', dir,
            '&&',
            'node-sass --omit-source-map-url --output-style=expanded', inFileName, '>', outFileName,
            '&&',
            'postcss -u autoprefixer --autoprefixer.browsers "last 2 versions" -o', outFileName, outFileName,
            '&&',
            'cleancss', '-o', outFileName, outFileName
        ].join(' ');
    },
    validPath: function(path) {
        var fileWithUnderscore = path.match(underscoreRe);
        if (fileWithUnderscore !== null) {
            return false;
        }
        return true;
    }
});
