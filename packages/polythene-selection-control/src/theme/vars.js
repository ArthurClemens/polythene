import { vars } from "polythene-theme";

const rgba = vars.rgba;

const activeColor = vars.color_primary; // or override in CSS by setting 'color' property on '.pe-checkbox' / '.pe-radio-button'
const label_padding = (vars.grid_unit_icon_button - vars.unit_icon_size) / 2; // 12

export default {
  label_font_size:                     2 * vars.grid_unit_component, // 16
  label_height:                        3 * vars.grid_unit_component, // 24
  padding:                             Math.floor(1.7 * vars.grid_unit_component),
  label_padding,                 
  button_size:                         6 * vars.grid_unit_component,
  icon_size:                           3 * vars.grid_unit_component,
  animation_duration:                  vars.animation_duration,

  color_light_on:                      vars.rgba(activeColor),
  color_light_off:                     rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_label:                   rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled:                rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity:  .11,

  // icon colors may be set in theme; disabled by default
  // color_light_on_icon
  // color_light_off_icon

  color_light_focus_on:                rgba(vars.color_primary),
  color_light_focus_on_opacity:        .11,
  color_light_focus_off:                rgba(vars.color_light_foreground),
  color_light_focus_off_opacity:       .07,

  color_dark_on:                       vars.rgba(activeColor),
  color_dark_off:                      rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_label:                    rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled:                 rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity:  .08,
  color_dark_thumb_on_focus_opacity:   .11,

  // icon color may be set in theme; disabled by default
  // color_dark_on_icon
  // color_dark_off_icon
  
  color_dark_focus_on:                 rgba(vars.color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity:         .14,
  color_dark_focus_off:                rgba(vars.color_dark_foreground),
  color_dark_focus_off_opacity:        .09
};
