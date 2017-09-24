const { writeCSS }  = require("polythene-scripts");

const inPath        = "../dist/polythene-core-css.js";
const styles        = require(inPath);

writeCSS({
  path: "./dist/polythene-layout-styles.css",
  styles: [styles.layoutStyles],
  beautify: true,
});
