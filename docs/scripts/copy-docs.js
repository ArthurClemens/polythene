'use strict';
require('shelljs/global');

var fileRe = /\.md$/;
var origin = process.argv[2];
var dest = process.argv[3];

rm('-rf', dest);
mkdir('-p', dest);

var files = find(origin).filter(function(file) {
	return file.match(fileRe);
});

files.map(function(file) {
    cp(file, dest);
});
