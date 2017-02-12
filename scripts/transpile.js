'use strict';var sh=require('shelljs'),dir=process.argv[2];sh.exec('babel '+dir+' --out-dir '+dir+' --only *.es6 --source-maps true');
//# sourceMappingURL=transpile.js.map