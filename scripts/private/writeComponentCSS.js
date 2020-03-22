/* global process */
const { writej2c }  = require("write-j2c");
const fs            = require("fs");
const path          = require("path");
const baseDir       = process.cwd();
const packagePath   = path.resolve(baseDir, "./package.json");
const pkg           = JSON.parse(fs.readFileSync(packagePath));
const name          = path.basename(pkg.name);
const componentPath = path.resolve(baseDir, `./dist/${name}.js`);
const styles        = require(componentPath).getStyle();
const shortName     = name.replace("-css-", "-");
const outPath       = path.resolve(baseDir, `./dist/${shortName}.css`);

if (styles) {
  writej2c({
    path: outPath,
    styles,
    beautify: true,
  });
}
