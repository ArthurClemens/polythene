import { vars } from "polythene-theme";
import { vars as buttonVars } from "polythene-button";
import { vars as iconButtonVars } from "polythene-icon-button";

const rgba = vars.rgba;

const fontSize = buttonVars.font_size;
const tab_label_line_height = 1.1 * fontSize;

export default {
  tab_min_width:                  72,
  tab_max_width:              "none",
  tab_height:                     48,
  tab_min_width_tablet:          160,
  label_max_width:               264,
  menu_tab_height:                44,
  menu_tab_icon_label_height:     44,
  tab_icon_label_height:          72,
  tab_icon_label_icon_spacing:     7,
  indicator_slide_speed:         600, // px per second
  indicator_slide_min_duration: .250,
  tabs_scroll_speed:             600, // px per second
  tabs_scroll_delay:             .15,
  tabs_scroll_min_duration:       .5,
  scroll_button_fade_duration:    .2,
  scroll_button_fade_delay:       .5,
  tab_content_padding_v:          12,
  tab_menu_content_padding_v:      6,
  tab_indicator_height:            2,
  scrollbar_offset:               20,
  scroll_button_opacity:          .7,
  label_opacity:                  .7,

  tab_label_line_height,
  tab_label_vertical_offset:        tab_label_line_height - fontSize,
  tab_label_transition_property:    "opacity, color, backgroundColor",
 
  color_light:                      "inherit",
  color_light_selected:             rgba(vars.color_primary),
  color_light_selected_background:  "transparent",
  color_light_tab_indicator:        rgba(vars.color_primary),
  color_light_icon:                 iconButtonVars.color_light,
 
  color_dark:                       "inherit",
  color_dark_selected:              rgba(vars.color_primary),
  color_dark_selected_background:   "transparent",
  color_dark_tab_indicator:         rgba(vars.color_primary),
  color_dark_icon:                  iconButtonVars.color_dark
};
