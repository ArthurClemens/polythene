import { vars } from "polythene-theme";
const rgba = vars.rgba;

const buttonPaddingH = 8; // padding, inner text space

export default {
  width:                  274,
  min_height:             80,
  border_radius:          vars.unit_block_border_radius,
  title_padding_h:        buttonPaddingH,
  title_single_padding_v: 14,
  title_multi_padding_v:  20,
  side_padding:           24 - buttonPaddingH,
  font_size:              14,
  line_height:            20,

  color_light_background: rgba(vars.color_light_background),
  color_light_text:       rgba(vars.color_light_foreground, vars.blend_light_dark_primary),

  color_dark_background:  rgba(vars.color_dark_background, .85),
  color_dark_text:        rgba(vars.color_dark_foreground, vars.blend_light_text_primary)
};
