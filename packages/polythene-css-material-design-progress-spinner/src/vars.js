import { rgba } from "polythene-core-css";
import { vars as baseVars } from "polythene-css-base-spinner";
import { vars } from "polythene-theme";

export default Object.assign(
  {},
  baseVars,
  {
    progress_animation_duration: ".8s",

    color_light:                 rgba(vars.color_primary),
    color_dark:                  rgba(vars.color_primary)
  }
);
