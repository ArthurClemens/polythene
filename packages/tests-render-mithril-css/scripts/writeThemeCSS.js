const { writeCSS } = require("polythene-scripts");
const { CardCSS, ButtonCSS, IconCSS, DialogCSS, MenuCSS, DrawerCSS } = require("polythene-css");

const breakPointSmall = 480;
const breakPointDrawerSmall = breakPointSmall + 56 + 1;
const breakPointDrawerMedium = breakPointDrawerSmall + 240;

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
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
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
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  IconCSS.getStyle(
    ".themed-icon",
    {
      size_regular: 50,
      color_light:  "purple",
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  DialogCSS.getStyle(
    ".small-screen-full-screen",
    {
      full_screen: true,
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
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
      mediaQuery: `@media all and (max-width: ${breakPointSmall}px)`
    }
  ),
  DrawerCSS.getStyle(
    ".small-screen-cover-drawer",
    {
      cover: true,
      backdrop: true,
      z: 1,
      border: false,
    },
    {
      mediaQuery: `@media all and (max-width: ${breakPointDrawerSmall}px)`
    }
  ),
  DrawerCSS.getStyle(
    ".medium-screen-mini-drawer",
    {
      push: true,
      mini: true,
      border: true,
    },
    {
      mediaQuery: `@media all and (min-width: ${breakPointDrawerSmall}px) and (max-width: ${breakPointDrawerMedium}px)`
    }
  ),
  DrawerCSS.getStyle(
    ".large-screen-floating-drawer",
    {
      permanent: true,
      floating: true,
      z: 1,
      border_radius: 4
    },
    {
      mediaQuery: `@media all and (min-width: ${breakPointDrawerMedium}px)`
    }
  ),
];

writeCSS({
  styles,
  path: "./dist/css/theme.css",
  autoPrefix: true,
  gzip: true,
});
