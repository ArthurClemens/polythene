const { writeCSS }  = require("polythene-scripts");

const inPath        = "../dist/polythene-utilities.js";
const styles        = require(inPath);

writeCSS({
  path: "./dist/polythene-utilities.css",
  styles: [styles.layoutStyles],
  beautify: true,
});
