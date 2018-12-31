import { CommonOptions } from "polythene-core";
import { Options as IconOptions } from "polythene-core-icon";

export interface Options extends CommonOptions {

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

  /**
   * Alternative content; replaces any children.
   */
  content?: any;

  /**
   * Alternative content.
   */
  children?: any;

  /* END COMMON OPTIONS */

  /**
   * Icon options object; also used to show an round "avatar" portrait image.
   */
  icon?: IconOptions;

  /**
   * Optional button label.
   */
  label?: string;

  /**
   * Set to true to use less padding.
   * @default false
   */
  compact?: boolean;

  /**
   * Set to true to disable button events and ripple/wash effects.
   * @default false
   */
  inactive?: boolean;

}
