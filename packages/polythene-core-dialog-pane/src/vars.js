import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default {
  max_width:           7 * vars.grid_unit_menu,      // 56   
  side_padding_mobile: 6 * vars.grid_unit,           // 48
  padding:             3 * vars.grid_unit_component, // 24
  header_bottom:       20,
  header_height:       60,
  footer_height:       52,

  border_width:        1,

  color_light_title_text:          "inherit",
  color_light_body_text:           "inherit",
  color_light_body_border:         rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_background:          "inherit",

  color_dark_title_text:           "inherit",
  color_dark_body_text:            "inherit",
  color_dark_body_border:          rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_background:           "inherit",
};
