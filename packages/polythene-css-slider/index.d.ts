
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface SliderVars {
  general_styles:                      boolean,
  active_pin_thumb_scale:              number,
  active_thumb_scale:                  number,
  animation_duration:                  number,
  bar_height:                          number,
  disabled_thumb_scale:                number,
  height:                              number,
  horizontal_layout_side_spacing:      number,
  pin_font_size:                       number,
  pin_height:                          number,
  pin_width:                           number,
  side_spacing:                        number,
  step_width:                          number,
  thumb_border_width:                  number,
  thumb_size:                          number,
  thumb_touch_size:                    number,
  track_height:                        number,
  color_light_track_active:            string,
  color_light_track_inactive:          string,
  color_light_track_value:             string,
  color_light_thumb_background?:       string,
  color_light_thumb_off:               string,
  color_light_thumb_off_focus:         string,
  color_light_thumb_off_focus_opacity: number,
  color_light_thumb_on:                string,
  color_light_thumb_on_focus_opacity:  number,
  color_light_thumb_inactive:          string,
  color_light_tick:                    string,
  color_light_tick_value:              string,
  color_light_icon:                    string,
  color_light_disabled_icon:           string,
  color_light_label:                   string,
  color_light_disabled_label:          string,
  color_light_pin_label:               string,
  color_light_pin_background:          string,
  color_dark_track_active:             string,
  color_dark_track_inactive:           string,
  color_dark_track_value:              string,
  color_dark_thumb_background?:        string,
  color_dark_thumb_off:                string,
  color_dark_thumb_off_focus:          string,
  color_dark_thumb_off_focus_opacity:  number,
  color_dark_thumb_on:                 string,
  color_dark_thumb_on_focus_opacity:   number,
  color_dark_thumb_inactive:           string,
  color_dark_tick:                     string,
  color_dark_tick_value:               string,
  color_dark_icon:                     string,
  color_dark_disabled_icon:            string,
  color_dark_label:                    string,
  color_dark_disabled_label:           string,
  color_dark_pin_label:                string,
  color_dark_pin_background:           string,
}

export const vars: SliderVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
