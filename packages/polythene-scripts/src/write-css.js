const autoprefixer = require("autoprefixer");
const cssbeautify  = require("cssbeautify");
const fs           = require("fs");
const J2c          = require("j2c");
const postcss      = require("postcss");
const cssnano      = require("cssnano");
const tar          = require("tar");

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

const beautifyCSS = cssString =>
  cssbeautify(cssString, {
    indent: "  "
  });

const saveToFile = (path, cssString) => 
  fs.writeFileSync(path, cssString, "ascii", err => {  
    // throws an error, you could also catch it here
    if (err) throw err;
  });

export const processCSS = ({ styles, path, autoPrefix }) => {
  const cssString = styles.reduce((acc, current) => (
    acc + makeStyleSheet(current)
  ), "");
  return { cssString, path, autoPrefix };
};

export const writeCSS = ({ css, styles, path, autoPrefix, beautify, sourceMap=true, gzip }) => {
  const cssString = css
    ? css
    : styles
      ? styles.reduce((acc, current) => acc + makeStyleSheet(current), "")
      : "";

  const mapPath = `${path}.map`;

  const plugins = [];
  if (autoPrefix) {
    plugins.push(autoprefixer());
  }
  plugins.push(cssnano({
    preset:       "default",
    reduceIdents: false,
    zindex:       false,
  }));

  const options = sourceMap
    ? {
      to:  path,
      map: { inline: false }
    }
    : {};

  postcss(plugins)
    .process(cssString, options)
    .then(result => {
      result.warnings().forEach(warn => {
        console.warn(COLOR_RED, "Warning", COLOR_WHITE, warn.toString()); // eslint-disable-line no-console
      });
      saveToFile(path, beautify ? beautifyCSS(result.css) : result.css);
      if (gzip) {
        tar.c(
          { gzip: true },
          [path]
        ).pipe(fs.createWriteStream(`${path}.gz`));
      }
      if (sourceMap) {
        saveToFile(mapPath, result.map);
      }
    });
};

