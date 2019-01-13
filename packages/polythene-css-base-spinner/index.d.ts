
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface BaseSpinnerVars {
  general_styles:                boolean,
  animation_delay:               string,
  animation_duration:            string,
  animation_hide_css:            string,
  animation_show_css:            string,
  animation_timing_function:     string,
  size_fab:                      number,
  size_large:                    number,
  size_medium:                   number,
  size_regular:                  number,
  size_small:                    number,
  color_light_raised_background: string,
  color_dark_raised_background:  string,
}

export const vars: BaseSpinnerVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;
