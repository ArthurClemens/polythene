
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface TabsVars {
  general_styles:                   boolean,
  animation_duration:               number,
  indicator_slide_speed:            number,
  label_max_width:                  number,
  menu_tab_height:                  number,
  menu_tab_icon_label_height:       number,
  scroll_button_fade_delay:         string,
  scroll_button_fade_duration:      string,
  scroll_button_opacity:            number,
  scroll_button_size:               number,
  scrollbar_offset:                 number,
  tab_content_padding_v:            number,
  tab_height:                       number,
  tab_icon_label_height:            number,
  tab_icon_label_icon_spacing:      number,
  tab_indicator_height:             number,
  tab_label_line_height:            number,
  tab_label_transition_property:    string,
  tab_label_vertical_offset:        number,
  tab_max_width:                    string,
  tab_menu_content_padding_v:       number,
  tab_min_width:                    number,
  tab_min_width_tablet:             number,
  tabs_indent:                      number,
  color_light_text:                 string,
  color_light_selected:             string,
  color_light_selected_background:  string,
  color_light_tab_indicator:        string,
  color_light_icon:                 string,
  color_dark_text:                  string,
  color_dark_selected:              string,
  color_dark_selected_background:   string,
  color_dark_tab_indicator:         string,
  color_dark_icon:                  string,
  color_light_hover?:               string,
  color_light_hover_background?:    string,
  color_dark_hover?:                string,
  color_dark_hover_background?:     string,
}

export const vars: TabsVars;
export const tabColor: StyleFn;
export const tabLayout: StyleFn;
export const tabsColor: StyleFn;
export const tabsLayout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
