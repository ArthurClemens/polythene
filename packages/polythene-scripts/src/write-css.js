const autoprefixer = require("autoprefixer");
const cssbeautify  = require("cssbeautify");
const fs           = require("fs");
const J2c          = require("j2c");
const postcss      = require("postcss");

const j2c = new J2c();
const COLOR_RED = "\x1b[31m";
const COLOR_WHITE = "\x1b[37m";

const makeStyleSheet = (...styles) =>
  styles.reduce((acc, styleList) =>
    // each style returns a list
    Object.keys(styleList).length
      ? (
        styleList.forEach(style => {
          const scoped = {
            "@global": style
          };
          const sheet = j2c.sheet(scoped);
          acc += sheet;      
        }),
        acc
      )
      : acc, "");

const beautify = cssString =>
  cssbeautify(cssString, {
    indent: "  "
  });

const saveToFile = (path, cssString) => 
  fs.writeFile(path, cssString, "ascii", err => {  
    // throws an error, you could also catch it here
    if (err) throw err;
  });

export const writeCSS = ({ styles, path, autoPrefix }) => {

  const cssString = styles.reduce((acc, current) => (
    acc + makeStyleSheet(current)
  ), "");

  const plugins = [];
  if (autoPrefix) {
    plugins.push(autoprefixer);
  }
  postcss(plugins).process(cssString).then(result => {
    result.warnings().forEach(warn => {
      console.warn(COLOR_RED, "Warning", COLOR_WHITE, warn.toString()); // eslint-disable-line no-console
    });
    saveToFile(path, beautify(result.css));
  });
};

