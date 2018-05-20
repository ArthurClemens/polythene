import { vars } from "polythene-theme";
import { vars as baseVars } from "polythene-core-base-spinner";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;
  
export default Object.assign(
  {},
  baseVars,
  {
    progress_animation_duration: ".8s",

    color_light:                 rgba(vars.color_primary),
    color_dark:                  rgba(vars.color_primary)
  }
);
