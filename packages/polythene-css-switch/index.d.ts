
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";
import { SelectionControlVars } from "polythene-css-selection-control";

export interface SwitchVars extends Partial<SelectionControlVars>{
  general_styles:                     boolean,
  height:                             number | undefined,
  animation_duration:                 number,
  hit_area_padding:                   number,
  icon_button_padding:                number,
  padding:                            number,
  thumb_size:                         number,
  track_height:                       number,
  track_length:                       number,
  color_light_thumb_on:               string,
  color_light_thumb_off:              string,
  color_light_thumb_disabled:         string,
  color_light_wash_on:                string,
  color_light_wash_off:               string,
  color_light_track_on:               string,
  color_light_track_on_opacity:       number,
  color_light_track_off:              string,
  color_light_track_off_opacity:      number,
  color_light_track_disabled:         string,
  color_light_track_disabled_opacity: number,
  color_light_icon_on?:               string,
  color_light_icon_off?:              string,
  color_dark_thumb_on:                string,
  color_dark_thumb_off:               string,
  color_dark_thumb_disabled:          string,
  color_dark_wash_on:                 string,
  color_dark_wash_off:                string,
  color_dark_track_on:                string,
  color_dark_track_on_opacity:        number,
  color_dark_track_off:               string,
  color_dark_track_off_opacity:       number,
  color_dark_track_disabled:          string,
  color_dark_track_disabled_opacity:  number,
  color_dark_icon_on?:                string,
  color_dark_icon_off?:               string,
}

export const vars: SwitchVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
