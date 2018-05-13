import { vars } from "polythene-theme";

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

export default {
  general_styles:                true,

  size_small:                    vars.unit_icon_size_small,
  size_regular:                  vars.unit_icon_size,
  size_medium:                   vars.unit_icon_size_medium,
  size_large:                    vars.unit_icon_size_large,

  // avatar background is visible when image is not yet loaded
  color_light_avatar_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_dark_avatar_background:  rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),

  color_light:                   "currentcolor",
  color_dark:                    "currentcolor"
};
