'use strict';

// argv[2]: state (run once or watch)
// argv[3]: which dir to watch
// argv[4]: which dir to ignore

var watch = require('transpile-watch');
watch ({
    persistent: !(process.argv[2] === 'once'),
    what: process.argv[3],
    ignore: (process.argv[4] && process.argv[4] !== 'null') ? process.argv[4] : null,
    extension: '.es6',
    createOutPath: function(inPath) {
        return inPath.replace(/es6$/, 'js');
    },
    transform: function(inPath, outPath) {
        return [
            'babel', '--presets es2015', '--plugins add-module-exports', inPath, '>', outPath,
            '&&',
            'uglifyjs', '-o', outPath, outPath
        ].join(' ');
    }
});
