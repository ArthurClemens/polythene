const sh = require('shelljs');

sh.rm('-rf', '../../../../polythene-examples/gh-pages/*');
sh.cp('-R', 'dist/*', '../../../../polythene-examples/gh-pages/');