'use strict';

require('shelljs/global');

var root = pwd();

function getMdi() {
	console.log('Fetching Templarian Material Design Icons');
	var tmpDir = 'tmp';
	var dest = 'lib/deps/svg/mdi';
	cd(root);
	rm('-rf', tmpDir);
	mkdir('-p', tmpDir);
	cd(tmpDir);
	exec('git clone git://github.com/Templarian/MaterialDesign');

	console.log('Copying Templarian Material Design Icons');
	cd(root);
	rm('-rf', dest);
	mkdir('-p', dest);
	cp('-R', tmpDir + '/MaterialDesign/icons/svg/', dest);
	//rm('-rf', tmpDir);
}

function getMdif() {
	console.log('Copying Material Design Iconic Font');
	var dest = 'lib/deps/svg/material-design-iconic-font';
	cd(root);
	rm('-rf', dest);
	mkdir('-p', dest);
	cp('-R', 'node_modules/material-design-iconic-font/svg/', dest);
}

function getMaterialColors() {
	console.log('Copying Material Colors');
	var dest = 'lib/deps/material-colors';
	var fileIn = 'colors.scss';
	var fileOut = '_colors.scss';
	cd(root);
	rm('-rf', dest);
	mkdir('-p', dest);
	cp('-R', 'node_modules/material-colors/dist/' + fileIn, dest);
	cd(dest);
	mv(fileIn, fileOut);
}

getMdi();
getMdif();
getMaterialColors();
