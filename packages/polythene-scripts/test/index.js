const shell           = require("shelljs");
const glob            = require("glob-fs")();
const { writeCSS }    = require("../dist/polythene-scripts");
const { getStyle }    = require("../../polythene-css-svg");

glob.readdirSync("./test/*.css*").map(file => shell.rm(file));

const styles = [
  getStyle(".test-theme-svg-1", {
    color_light: "#0D47A1",
    color_dark: "orange"
  }),
  getStyle(".test-theme-svg-2", {
    color_light: "green",
    color_dark: "red"
  })
];

/* 
Expect file:
* to be minified
* to have a sourcemap
*/
writeCSS({
  styles,
  path: "./test/test-defaults.css"
});

/* 
Expect file:
* to be minified
* not to have a sourcemap
*/
writeCSS({
  styles,
  path: "./test/test-no-sourcemap.css",
  sourceMap: false,
});

/* 
Expect file:
* not to be minified
* to be beautified
* to have a sourcemap
*/
writeCSS({
  styles,
  path: "./test/test-beautify.css",
  beautify: true
});
