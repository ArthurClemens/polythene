
import { vars } from "polythene-theme";
import { vars as baseVars } from "polythene-spinner";
const rgba = vars.rgba;

export default Object.assign(
  {},
  baseVars,
  {
    border_width_small:   baseVars.size_small / baseVars.size_regular * 3,
    border_width_regular: 3,
    border_width_medium:  baseVars.size_medium / baseVars.size_regular * 3,
    border_width_large:   baseVars.size_large / baseVars.size_regular * 3,
    border_width_fab:     baseVars.size_fab / baseVars.size_regular * 3,
    animation_duration:   "1.5s",

    color_light:          rgba(vars.color_primary),
    color_dark:           rgba(vars.color_primary)
  }
);
