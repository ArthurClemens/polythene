'use strict';

var watch = require('./watch');
watch ({
    what: process.argv[2],
    ignore: (process.argv[3] && process.argv[3] !== 'null') ? process.argv[3] : null,
    persistent: !(process.argv[4] === 'once'),
    extension: 'es6.js',
    createOutPath: function(inPath) {
        return inPath.replace(/es6.js$/, 'js');
    },
    transform: function(inPath, outPath) {
        return [
            'babel', inPath, '>', outPath,
            '&&',
            'uglifyjs', '-o', outPath, outPath
        ].join(' ');
    }
});
