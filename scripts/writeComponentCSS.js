const { writeCSS }  = require("../packages/polythene-scripts");
const fs            = require("fs");
const path          = require("path");

const pkg           = JSON.parse(fs.readFileSync("./package.json"));
const name          = path.basename(pkg.name);
const componentPath = `../packages/${name}/dist/${name}.js`;
const styles        = require(componentPath).styles();
const outPath       = `./dist/${name}.css`;

writeCSS({
  path: outPath,
  styles
});
