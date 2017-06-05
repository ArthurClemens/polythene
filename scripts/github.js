const sh = require('shelljs');

const FROM = 'packages/examples/dist';
const TO = '../../polythene-examples/gh-pages';

sh.rm('-rf', `${TO}/*`);
sh.cp('-R', `${FROM}/assets`, `${TO}/`);
sh.cp('-R', `${FROM}/js`, `${TO}/`);
sh.cp(`${FROM}/index.html`, `${TO}/`);
