import { vars } from "polythene-theme";
import { rgba } from "polythene-core-css";

const padding_side =            vars.grid_unit_component * 2 - 12; // 16 - 12 = 4
const title_padding =           vars.grid_unit_component * 9 - vars.grid_unit_component * 6 - padding_side; // 72 - 48 - 4
const height_mobile_portrait =  vars.grid_unit_component * 7; // 56
const height_desktop =          vars.grid_unit_component * 8; // 64

export default {
  padding_side,
  height:                    height_desktop,
  height_compact:            height_mobile_portrait,

  // title vars
  title_padding,
  indent:                    vars.unit_indent,
  transition_duration:       vars.animation_duration,
  font_size:                 18,
  line_height:               vars.line_height,

  // color vars
  color_light_text:          rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_dark_text:           rgba(vars.color_dark_foreground,  vars.blend_dark_text_primary),

  // background colors may be set in theme; disabled by default
  // color_light_background:    "transparent",
  // color_dark_background:     "transparent",
};
