import { CommonOptions } from "polythene-core";
import { Options as IconButtonOptions } from "polythene-core-icon-button";
import { Options as IconOptions } from "polythene-core-icon";

export interface Options extends Partial<CommonOptions> {

  /* START COMMON OPTIONS */

  /**
   * Options object containing one or more standard events such as onclick (React: onClick).
   */
  events?: object;

  /**
   * (Mithril)
   * Tab index.
   */
  tabindex?: number;
  
  /**
   * (React)
   * Tab index.
   */
  tabIndex?: number;

  /* END COMMON OPTIONS */

  /**
   * Managed checked state. See: Handling State in the documentation.
   * @default false
   */
  checked?: boolean;

  /**
   * Initially checked state.
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * Set to true to disable the checkbox.
   * @default false
   */
  disabled?: boolean;

  /**
   * Add attributes like wash and ink.
   */
  iconButton?: IconButtonOptions;

  /**
   * Text label.
   */
  label?: string;

  /**
   * Input element name.
   */
  name?: string;

  /**
   * Callback function.
   * See: Handling State in the documentation.
   */
  onChange?: ({ event, checked, value } : { event: Event, checked: boolean, value: string }) => void;

  /**
   * Sets the active state based on the checkbox state; receives the current selected state, return the selectable state.
   */
  selectable?: ( selected: boolean) => boolean;

  /**
   * Equivalent to Icon's type option; either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px).
   */
  size?: "small" | "regular" | "medium" | "large";

  /**
   * Input element value.
   */
  value?: string;

}

export interface IconOptions extends Partial<CommonOptions> {

  /**
   * Assigns a different icon for the off state.
   */
  iconOff?: IconOptions;

  /**
   * Assigns a different icon for the on state.
   */
  iconOn?: IconOptions;

}
