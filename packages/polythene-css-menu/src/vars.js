import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";
import { sharedVars as shadowVars } from "polythene-css-shadow";

const themeVars = Object.assign(
  {},
  {
    backdrop:                       undefined, // (Boolean) - if not set, backdrop existence is set by component option
    top_menu:                       false, // set to true to position the menu at the top of the screen, full width
    z:                              vars.z_menu, // z-depth of the menu (not the shadow depth)
  },
  shadowVars
);

export default Object.assign(
  {},
  {
    general_styles:                   true,
         
    animation_delay:                  "0s",
    animation_duration:               ".180s",
    animation_hide_css:               "opacity: 0;",
    animation_hide_origin_effect_css: "transform: scale(0.75);", // set to "transform: scale(1)" to reset scaling
    animation_show_css:               "opacity: 1;",
    animation_show_origin_effect_css: "transform: scale(1);",
    animation_timing_function:        "ease-in-out",
    border_radius:                    vars.unit_block_border_radius,
    height:                           undefined, // (height value with unit) - if not set, height is set by component option
    min_width:                        1.5,
    width_factor:                     vars.grid_unit_menu,
    widths:                           [1, 1.5, 2, 3, 4, 5, 6, 7],

    // color vars

    color_light_background:           rgba(vars.color_light_background),
    color_dark_background:            rgba(vars.color_dark_background),

    color_light_backdrop_background:  "rgba(0, 0, 0, .1)",
    color_dark_backdrop_background:   "rgba(0, 0, 0, .5)",

    // text colors are set by content, usually list tiles
  },
  themeVars
);
