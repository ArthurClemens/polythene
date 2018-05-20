import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;
  
export default {
  general_styles:              true,

  rotation_animation_duration: "1s",

  color_light:                 rgba(vars.color_light_foreground),
  color_dark:                  rgba(vars.color_dark_foreground)
};
