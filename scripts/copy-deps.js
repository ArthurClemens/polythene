'use strict';

var shell = require('shelljs');

var root = shell.pwd();

function getMdi() {
	console.log('Fetching Templarian Material Design Icons');
	var tmpDir = 'tmp';
	var dest = 'lib/deps/svg/mdi';
	shell.cd(root);
	shell.rm('-rf', tmpDir);
	shell.mkdir('-p', tmpDir);
	shell.cd(tmpDir);
	shell.exec('git clone git://github.com/Templarian/MaterialDesign');

	console.log('Copying Templarian Material Design Icons');
	shell.cd(root);
	shell.rm('-rf', dest);
	shell.mkdir('-p', dest);
	shell.cp('-R', tmpDir + '/MaterialDesign/icons/svg/', dest);
	//rm('-rf', tmpDir);
}

function getMdif() {
	console.log('Copying Material Design Iconic Font');
	var dest = 'lib/deps/svg/material-design-iconic-font';
	shell.cd(root);
	shell.rm('-rf', dest);
	shell.mkdir('-p', dest);
	shell.cp('-R', 'node_modules/material-design-iconic-font/svg/', dest);
}

function getMaterialColors() {
	console.log('Copying Material Colors');
	var dest = 'lib/deps/material-colors';
	var fileIn = 'colors.scss';
	var fileOut = '_colors.scss';
	shell.cd(root);
	shell.rm('-rf', dest);
	shell.mkdir('-p', dest);
	shell.cp('-R', 'node_modules/material-colors/dist/' + fileIn, dest);
	shell.cd(dest);
	shell.mv(fileIn, fileOut);
}

getMdi();
getMdif();
getMaterialColors();
