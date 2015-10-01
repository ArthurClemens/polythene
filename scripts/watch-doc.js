'use strict';

var watch = require('./watch');
watch ({
    what: process.argv[2],
    ignore: (process.argv[3] && process.argv[3] !== 'null') ? process.argv[3] : null,
    persistent: !(process.argv[4] === 'once'),
    extension: 'md',
    createOutPath: function(path) {
        var pathParts = path.split(/\//);
        var fileName = pathParts.pop();
        var outPath = 'src/app/docs/' + fileName;
        return outPath;
    },
    transform: function(path, outPath) {
        return [
            'cp', path, outPath
        ].join(' ');
    }
});

