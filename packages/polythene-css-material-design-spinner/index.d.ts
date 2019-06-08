
import { StyleObject, StyleFn, Scoping } from "polythene-core-css";

export interface MaterialDesignSpinnerVars {
  general_styles:       boolean,
  arc_size:             number,
  arc_start_degrees:    number,
  arc_time:             number,
  border_width_fab:     number,
  border_width_large:   number,
  border_width_medium:  number,
  border_width_regular: number,
  border_width_small:   number,
  rotation_duration:    number,
  color_light_single:   string,
  color_light_1:        string,
  color_light_2:        string,
  color_light_3:        string,
  color_light_4:        string,
  color_dark_single:    string,
  color_dark_1:         string,
  color_dark_2:         string,
  color_dark_3:         string,
  color_dark_4:         string,
}

export const vars: MaterialDesignSpinnerVars;
export const color: StyleFn;
export const layout: StyleFn;

export function addStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): void;

export function getStyle(customSelector: string, customVars: StyleObject, scoping?: Scoping): Array<StyleObject>;

export function addGeneralStyleToHead(): void;
