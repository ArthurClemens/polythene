
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface DialogPaneVars {
  general_styles:                  boolean,
  border_width:                    number,
  footer_height:                   number,
  header_bottom:                   number,
  header_height:                   number,
  line_height_title:               number,
  max_width:                       number,
  min_width:                       number,
  padding:                         number,
  side_padding_mobile:             number,
  max_height:                      number,
  margin_vertical:                 number,
  color_light_title_text:          string,
  color_light_body_text:           string,
  color_light_body_border:         string,
  color_light_background:          string,
  color_dark_title_text:           string,
  color_dark_body_text:            string,
  color_dark_body_border:          string,
  color_dark_background:           string,
}

export const vars: DialogPaneVars;
export const color: StyleFn;
export const layout: StyleFn;
export const fullScreen: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
