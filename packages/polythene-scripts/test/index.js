const shell                  = require("shelljs");
const glob                   = require("glob-fs")();
const { writeCSS }           = require("../dist/polythene-scripts");
const { addStyle, getStyle } = require("../../polythene-css-svg");

glob.readdirSync("./test/*.css*").map(file => shell.rm(file));

/*
Use (wrong) addStyle instead of getStyle
Expect file to be empty
*/
writeCSS({
  styles: [
    addStyle(".test-theme-svg-1", {
      color_light: "#0D47A1",
      color_dark: "orange"
    }),
  ],
  path: "./test/test-none.css",
  sourceMap: false,
});

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

/* 
Expect file:
* to be gzipped
* to have a sourcemap
*/
writeCSS({
  styles,
  path: "./test/test-gzip.css",
  gzip: true
});
