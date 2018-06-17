const { writeCSS } = require("polythene-scripts");
const { CardCSS, ButtonCSS, IconCSS } = require("polythene-css");

const styles = [
  CardCSS.getStyle(".themed-card", {
    color_dark_main_background: "#B89E58",
    color_dark_title_text:      "#fff",
    color_dark_subtitle_text:   "#fff"
  }),
  ButtonCSS.getStyle(
    ".themed-button",
    {
      color_light_background: "#2196F3",
      color_light_text:       "#fff",
      padding_h:              16
    },
    {
      mediaQuery: "@media all and (max-width: 480px) and (min-width: 360px), (min-width: 760px)"
    }
  ),
  IconCSS.getStyle(
    ".themed-icon",
    {
      size_regular: 50,
      color_light:  "purple",
    },
    {
      mediaQuery: "@media all and (max-width: 480px) and (min-width: 360px), (min-width: 760px)"
    }
  )
];

writeCSS({
  styles,
  path: "./dist/css/theme.css",
  autoPrefix: true,
  gzip: true,
});
