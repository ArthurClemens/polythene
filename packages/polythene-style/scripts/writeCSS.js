const { writeCSS }  = require("polythene-scripts");

const inPath        = "../dist/polythene-style.js";
const styles        = require(inPath);

// Layout

writeCSS({
  path: "./dist/polythene-layout.css",
  styles: [styles.layoutStyles],
  beautify: true,
});

// Typography

writeCSS({
  path: "./dist/polythene-typography.css",
  styles: [styles.typographyStyles],
  beautify: true,
});
