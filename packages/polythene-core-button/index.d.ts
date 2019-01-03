import { CommonOptions, URLOptions } from "polythene-core";
import { Options as RippleOptions } from "polythene-core-ripple";

interface RaisedButtonOptions {

  /**
   * Set to true to create a Raised Button.
   * @default false
   */
  raised?: boolean;

  /**
   * Set to false to remove shadow depth animation and subsequent redraw.
   * @default true
   */
  animateOnTap?: boolean;

  /**
   * The shadow depth.
   * @default 1
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * The shadow depth increment/decrement on tap; the maximum shadow depth is 5.
   * @default 1
   */
  increase?: number;

}
export interface Options extends Partial<CommonOptions>, RaisedButtonOptions {

  /* START COMMON OPTIONS */

  /**
   * HTML element tag; may also be "button".
   * @default "a"
   */
  element?: string;

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
   * The button label.
   */
  label?: string;
  
  /**
   * Set to true to add a border; by default the border has no color - set border color to class pe-button__content to see the border.
   */
  border?: boolean;

  /**
   * Set to true to give the button a Contained Button appearance (larger side padding).
   * @default false
   */
  contained?: boolean;

  /**
   * Disables the button.
   * @default false
   */
  disabled?: boolean;

  /**
   * Set to true to add a dropdown icon; note that a dropdown button has no minimum width.
   * @default false
   */
  dropdown?: boolean;

  /**
   * Set to true to add even more side padding.
   * @default false
   */
  extraWide?: boolean;

  /**
   * (Mithril)
   * The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the button"s form owner. (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction)
   */
  formaction?: string;
  
  /**
   * (React)
   * The URI of a program that processes the information submitted by the button. If specified, it overrides the action attribute of the button"s form owner. (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-formaction)
   */
  formAction?: string;

  /**
   * This does not make the button higher in itself; set to true to move the vertical "outer" padding to the label, creating a higher hover effect (and higher separator when using Button Group).
   * @default false
   */
  highLabel?: boolean;

  /**
   * The number of seconds after tap/click when the button is inactive; useful to prevent double clicks.
   * @default 0
   */
  inactivate?: number;

  /**
   * Set to true to disable button events and ripple/wash effects.
   * @default false
   */
  inactive?: boolean;

  /**
   * Set to false to disable the ripple effect on click/tap.
   * @default true
   */
  ink?: boolean;

  /**
   * Pass ripple options to define ripple behavior.
   */
  ripple?: RippleOptions;

  /**
   * Set to true to show the button as selected.
   * @default false
   */
  selected?: boolean;

  /**
   * Set to true to add a separator - normally placed at the left, with RTL languages at the right side.
   * @default false
   */
  separatorAtStart?: boolean;

  /**
   * The shadow depth (see: Raised Button).
   * @default 0
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * Style object for the text label.
   */
  textStyle?: object;

  /**
   * URL options.
   * Mithril: for in-app route linking set `oncreate: m.route.link`.
   * React: for in-app route linking use onClick and a router such as react-router-dom.
   */
  url?: Partial<URLOptions>;

  /**
   * Set to false to hide the effect on hover
   * @default true
   */
  wash?: boolean;

  /**
   * Alternative content, unstyled.
   * Ignores `label` and `children`.
   */
  content?: any;

  /**
   * Alternative content, unstyled.
   */
  children?: any;

}
