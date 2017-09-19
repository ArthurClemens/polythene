const { writeCSS }  = require("polythene-scripts");

const inPath        = "../dist/polythene-style.js";
const styles        = require(inPath);

writeCSS({
  path: "./dist/polythene-typography.css",
  styles: [styles.typographyStyles],
  beautify: true,
});
