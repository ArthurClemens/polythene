
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface ToolbarVars {
  general_styles:                 boolean,
  font_size:                      number,
  font_weight:                    number,
  height:                         number,
  height_compact:                 number,
  height_large:                   number,
  line_height:                    number,
  padding_side:                   number,
  padding_side_large:             number,
  indent:                         number,
  indent_large:                   number,
  title_after_icon_padding:       number,
  title_after_icon_padding_large: number,
  title_padding:                  number,
  title_padding_large:            number,
  color_light_text:               string,
  color_light_border:             string,
  color_light_background:         string,
  color_dark_text:                string,
  color_dark_border:              string,
  color_dark_background:          string,
}

export const vars: ToolbarVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
