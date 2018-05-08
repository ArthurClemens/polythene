import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default {
  color_light_border:          rgba(vars.color_light_foreground, vars.blend_light_border_light),                
  color_dark_border:           rgba(vars.color_dark_foreground,  vars.blend_dark_border_light),
};