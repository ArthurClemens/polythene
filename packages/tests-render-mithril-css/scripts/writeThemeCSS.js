const { writeCSS } = require("polythene-scripts");
const { CardCSS, ButtonCSS, IconCSS, DialogCSS, MenuCSS } = require("polythene-css");

const breakPoint = 480;

const styles = [
  CardCSS.getStyle(
    ".themed-card",
    {
      color_dark_main_background: "#B89E58",
      color_dark_title_text:      "#fff",
      color_dark_subtitle_text:   "#fff"
    }
  ),
  CardCSS.getStyle(
    ".small-image-card",
    {
      image_size_medium: 90
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPoint}px)`
    }
  ),
  ButtonCSS.getStyle(
    ".themed-button",
    {
      color_light_background: "#2196F3",
      color_light_text:       "#fff",
      padding_h:              16
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPoint}px)`
    }
  ),
  IconCSS.getStyle(
    ".themed-icon",
    {
      size_regular: 50,
      color_light:  "purple",
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPoint}px)`
    }
  ),
  DialogCSS.getStyle(
    ".small-screen-full-screen",
    {
      full_screen: true,
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPoint}px)`
    }
  ),
  MenuCSS.getStyle(
    ".small-screen-top-menu",
    {
      top_menu: true,
      backdrop: true,
      animation_hide_origin_effect_css: "transform: scale(1);",
      height: "50vh !important",
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPoint}px)`
    }
  )
];

writeCSS({
  styles,
  path: "./dist/css/theme.css",
  autoPrefix: true,
  gzip: true,
});
