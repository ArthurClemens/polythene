const autoprefixer = require("autoprefixer");
const cssbeautify  = require("cssbeautify");
const fs           = require("fs");
const J2c          = require("j2c");
const path         = require("path");
const postcss      = require("postcss");

const j2c = new J2c();
const pkg = JSON.parse(fs.readFileSync("./package.json"));
const env = process.env; // eslint-disable-line no-undef
const name = path.basename(pkg.name);
const componentPath = `../packages/${name}/dist/${name}.js`;
const outPath = `./dist/${name}.css`;
const styles = require(componentPath).styles;
const AUTO_PREFIX = false;
let CSS = "";

console.log(`Creating CSS for ${name}`);

styles().forEach(styleList => {
  // each style returns a list
  if (Object.keys(styleList).length) {
    styleList.forEach(style => {
      const scoped = {
        "@global": style
      };
      const sheet = j2c.sheet(scoped);
      CSS += sheet;      
    });
  }
});

const beautify = CSS =>
  cssbeautify(CSS, {
    indent: "  "
  });

const saveToFile = (path, CSS) => 
  fs.writeFile(path, CSS, "ascii", (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;
  });

if (AUTO_PREFIX) {
  postcss([ autoprefixer ]).process(CSS).then(function (result) {
    result.warnings().forEach(function (warn) {
      console.warn(warn.toString());
    });
    saveToFile(outPath, beautify(result.css));
  });
} else {
  saveToFile(outPath, beautify(CSS));
}

