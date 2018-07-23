import { rgba } from "polythene-core-css";
import { vars } from "polythene-theme";

const widePadding = 4 * vars.grid_unit; // 16

const touch_height = vars.unit_touch_height; // 48
const height = 36;
const border_width = 1;

const themeVars = {
  border:    false,
  contained: false,
};

const borderVars = {
  border_width,
  padding_h_border:                     widePadding,

  color_light_border:                   rgba(vars.color_light_foreground, vars.blend_light_border_medium), // only specify this variable to get all 4 states
  // color_light_hover_border:             "transparent",
  // color_light_active_border:            "transparent",
  color_light_disabled_border:          rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  //
  color_dark_border:                    rgba(vars.color_dark_foreground, vars.blend_dark_border_medium), // only specify this variable to get all 4 states
  // color_dark_hover_border:              "transparent",
  // color_dark_active_border:             "transparent",
  color_dark_disabled_border:           rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
};

export default Object.assign(
  {},
  {
    general_styles:                     true,
                
    animation_duration:                 vars.animation_duration,
    border_radius:                      vars.unit_item_border_radius,
    dropdown_icon_size:                 24,
    font_size:                          14,
    font_weight:                        500,
    label_padding_v:                    11,
    letter_spacing:                     0.75,
    line_height:                        1,
    min_width:                          8 * vars.grid_unit_component,
    outer_padding_v:                    (touch_height - height) / 2, // (48 - 36) / 2 = 6
    padding_h:                          2 * vars.grid_unit, // 8
    padding_h_extra_wide:               6 * vars.grid_unit, // 24
    row_margin_h:                       vars.grid_unit,
    separator_width:                    border_width,
    text_transform:                     "uppercase",

    color_light_background:             "transparent",
    color_light_text:                   rgba(vars.color_light_foreground, vars.blend_light_text_primary),
    color_light_wash_background:        rgba(vars.color_light_foreground, vars.blend_light_background_hover),
    color_light_active_background:      rgba(vars.color_light_foreground, vars.blend_light_background_active),
    color_light_disabled_background:    "transparent",
    color_light_disabled_text:          rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
    color_light_icon:                   rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
    color_light_separator:              rgba(vars.color_light_foreground, vars.blend_light_border_light), 

    color_dark_background:              "transparent",
    color_dark_text:                    rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
    color_dark_wash_background:         rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
    color_dark_active_background:       rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
    color_dark_disabled_background:     "transparent",
    color_dark_disabled_text:           rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
    color_dark_icon:                    rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
    color_dark_separator:               rgba(vars.color_dark_foreground, vars.blend_dark_border_light),

    // color_light_hover:                  rgba(vars.color_light_foreground, vars.blend_light_text_primary),
    // color_light_hover_background:       "transparent",
    // color_light_hover_icon:             "inherit",
    //
    // color_dark_hover:                   rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
    // color_dark_hover_background:        "transparent",
    // color_dark_hover_icon:              "inherit",
  },
  borderVars,
  themeVars
);
