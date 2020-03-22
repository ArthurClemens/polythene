const { writej2c }  = require("write-j2c");

const inPath        = "../dist/polythene-core-css.js";
const styles        = require(inPath);

writej2c({
  path: "./dist/polythene-layout-styles.css",
  styles: styles.layoutStyles,
  beautify: true,
});
