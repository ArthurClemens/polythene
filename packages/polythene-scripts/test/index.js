const { writeCSS } = require("../dist/polythene-scripts");
const { themeStyles } = require("../../polythene-theme-svg");

const styles = [
  themeStyles(".test-theme-svg-1", {
    color_light: "#0D47A1",
    color_dark: "orange"
  }),
  themeStyles(".test-theme-svg-2", {
    color_light: "green",
    color_dark: "red"
  })
];

writeCSS({
  styles,
  path: "./test/test.css",
  autoPrefix: true,
  sourceMap: true,
});
