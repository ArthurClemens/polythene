const { writeCSS }  = require("../packages/polythene-scripts");
const fs            = require("fs");
const path          = require("path");

const pkg           = JSON.parse(fs.readFileSync("./package.json"));
const name          = path.basename(pkg.name);
const componentPath = `../packages/${name}/dist/${name}.js`;
const styles        = require(componentPath).styles();
const shortName     = name.replace("-css-", "-");
const outPath       = `./dist/${shortName}.css`;

writeCSS({
  path: outPath,
  styles,
  beautify: true,
});
