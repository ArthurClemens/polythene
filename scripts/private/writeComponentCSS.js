/* global process */
const { writeCSS }  = require("../../packages/polythene-scripts/dist/polythene-scripts");
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
  writeCSS({
    path: outPath,
    styles,
    beautify: true,
  });
}
