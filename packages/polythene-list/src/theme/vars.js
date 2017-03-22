import { vars } from "polythene-theme";

const rgba = vars.rgba;

export default {
  padding:                vars.grid_unit_component, // vertical padding
  padding_compact:        vars.grid_unit_component / 2,
  border_width_stacked:   1,
  border_width_bordered:  1,

  color_light_border:     rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_border:      rgba(vars.color_dark_foreground,  vars.blend_dark_border_light),

  // background color may be set in theme; disabled by default
  // color_light_background: "inherit",
  // color_dark_background:  "inherit"
};

