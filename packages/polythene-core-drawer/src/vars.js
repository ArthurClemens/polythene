import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;
  
export default {
  color_light_background:          rgba(vars.color_light_background),
  color_dark_background:           rgba(vars.color_dark_background),

  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background:  "rgba(0, 0, 0, .5)",
};
