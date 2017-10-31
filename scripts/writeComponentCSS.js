const { writeCSS }  = require("../packages/polythene-scripts");
const fs            = require("fs");
const path          = require("path");

const pkg           = JSON.parse(fs.readFileSync("./package.json"));
const name          = path.basename(pkg.name);
const componentPath = `../packages/${name}/dist/${name}.js`;
const styles        = require(componentPath).getStyle();
const shortName     = name.replace("-css-", "-");
const outPath       = `./dist/${shortName}.css`;

if (styles) {
  writeCSS({
    path: outPath,
    styles,
    beautify: true,
    gzip: true,
  });
}
