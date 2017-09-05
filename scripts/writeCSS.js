
// const autoprefixer = require("autoprefixer");
// const cssbeautify  = require("cssbeautify");
// const fs           = require("fs");
// const J2c          = require("j2c");
// const path         = require("path");
// const postcss      = require("postcss");

// const j2c = new J2c();
// const pkg = JSON.parse(fs.readFileSync("./package.json"));
// const name = path.basename(pkg.name);
// const componentPath = `../packages/${name}/dist/${name}.js`;
// const outPath = `./dist/${name}.css`;
// const styles = require(componentPath).styles;
// const AUTO_PREFIX = false;
// let cssString = "";

// const COLOR_YELLOW = "\x1b[33m%s\x1b[0m";
// const COLOR_RED = "\x1b[31m";
// console.log(COLOR_YELLOW, `Creating CSS for ${name}`); // eslint-disable-line no-console

// styles().forEach(styleList => {
//   // each style returns a list
//   if (Object.keys(styleList).length) {
//     styleList.forEach(style => {
//       const scoped = {
//         "@global": style
//       };
//       const sheet = j2c.sheet(scoped);
//       cssString += sheet;      
//     });
//   }
// });

// const beautify = cssString =>
//   cssbeautify(cssString, {
//     indent: "  "
//   });

// const saveToFile = (path, cssString) => 
//   fs.writeFile(path, cssString, "ascii", (err) => {  
//     // throws an error, you could also catch it here
//     if (err) throw err;
//   });

// if (AUTO_PREFIX) {
//   postcss([ autoprefixer ]).process(cssString).then(function (result) {
//     result.warnings().forEach(function (warn) {
//       console.warn(COLOR_RED, warn.toString()); // eslint-disable-line no-console
//     });
//     saveToFile(outPath, beautify(result.css));
//   });
// } else {
//   saveToFile(outPath, beautify(cssString));
// }

