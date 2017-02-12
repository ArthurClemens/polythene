const sh = require('shelljs');

// argv[2]: dir
const dir = process.argv[2];

sh.exec(`babel ${dir} --out-dir ${dir} --only *.es6 --source-maps true`)
