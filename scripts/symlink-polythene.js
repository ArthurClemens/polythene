'use strict';

require('shelljs/global');

var origin = process.argv[2];
var dest = process.argv[3];

var isWin = /^win/.test(process.platform);

if (isWin) {
	mkdir('-p', dest);
	cp('-R', origin + '/*', dest);
} else {
	var execute = function(command) {
		var exec = require('child_process').exec;
		var logError = function(error, stdout) {
			if (error && stdout) {
				console.log(error, stdout);
			}
		};
		exec(command, logError);
	};
	execute([
		'rm -rf ' + dest,
		'&&',
        'ln -s "$(pwd)/' + origin + '" "$(pwd)/' + dest + '"'
    ].join(' '));
}
