
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface CardVars {
  general_styles:                      boolean,
  actions_button_margin_h:             number,
  actions_button_margin_v:             number,
  actions_padding_h:                   number,
  actions_padding_v:                   number,
  actions_vertical_padding_v:          number,
  border_radius:                       number,
  icon_element_width:                  number,
  image_size_large:                    number,
  image_size_medium:                   number,
  image_size_regular:                  number,
  image_size_small:                    number,
  offset_small_padding_v:              number,
  one_line_height_with_icon:           number,
  one_line_padding_v:                  number,
  padding_h:                           number,
  subtitle_line_height_padding_bottom: number,
  text_line_height_padding_bottom:     number,
  text_line_height_padding_top:        number,
  text_padding_bottom:                 number,
  text_padding_h:                      number,
  text_padding_v:                      number,
  tight_text_padding_bottom:           number,
  tight_title_padding_bottom:          number,
  title_padding_h:                     number,
  title_padding_v:                     number,
  color_light_main_background:         string,
  color_light_title_text:              string,
  color_light_subtitle_text:           string,
  color_light_text:                    string,
  color_light_actions_border:          string,
  color_light_overlay_background:      string,
  color_dark_main_background:          string,
  color_dark_title_text:               string,
  color_dark_subtitle_text:            string,
  color_dark_text:                     string,
  color_dark_actions_border:           string,
  color_dark_overlay_background:       string,
}

export const vars: CardVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
