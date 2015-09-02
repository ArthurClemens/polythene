'use strict';

require('shelljs/global');

var root = pwd();

function installRobotoWebfont() {
	console.log('Fetching Roboto Webfont');
	var dest = 'lib/font-roboto/fonts';
	cd(root);
	rm('-rf', dest);
	mkdir('-p', dest);
	exec('webfont-dl \"https://fonts.googleapis.com/css?family=RobotoDraft:400,500,700,400italic\" -o ' + dest + '/font-roboto.css --font-out=' + dest + ' --woff2=link --woff1==link --svg==link --ttf==link --eot==link');
}

installRobotoWebfont();
