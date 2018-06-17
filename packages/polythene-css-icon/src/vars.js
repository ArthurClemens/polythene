import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

export default {
  general_styles:                true,

  size_small:                    vars.unit_icon_size_small,  // 16 
  size_regular:                  vars.unit_icon_size,        // 24
  size_medium:                   vars.unit_icon_size_medium, // 32
  size_large:                    vars.unit_icon_size_large,  // 40

  // avatar background is visible when image is not yet loaded
  color_light_avatar_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_dark_avatar_background:  rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),

  color_light:                   "currentcolor",
  color_dark:                    "currentcolor"
};