const { writeCSS } = require("polythene-scripts");
const { CardCSS } = require("polythene-css");

const styles = [
  CardCSS.getStyle(".themed-card", {
    color_dark_main_background: "#B89E58",
    color_dark_title_text: "#fff",
    color_dark_subtitle_text: "#fff"
  })
];

writeCSS({
  styles,
  path: "./dist/css/theme.css",
  autoPrefix: true
});
