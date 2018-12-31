import { CommonOptions, TransitionOptions } from "polythene-core";

type Content = object | any;

export interface Options extends CommonOptions {
  
  /**
   * Menu content.
   */
  content?: Content;

  /**
   * Alternative menu content.
   */
  children?: Content;

  /**
   * Set to true to add a backdrop below the menu.
   * @default false
   */
  backdrop?: boolean;

  /**
   * Use "max" to use the maximum available height within the parent element (the top position and bottom margin will be subtracted automatically); otherwise use a number with or without pixels or percentage, for example: 160, "160px" or "75%".
   * When using percentage the parent element must have a height.
   */
  height?: number | "max" | string;

  /**
   * Horizontal offset relative to target element; use a number with or without pixels or percentage, for example: 16, "16px" or "75%".
   * @default 0
   */
  offsetH?: number | string;

  /**
   * Vertical offset relative to target element; use a number with or without pixels or percentage, for example: 16, "16px" or "75%".
   * @default "79%"
   */
  offsetV?: number | string;

  /**
   * Makes the menu appear from a corner or a side.
   * Use any combination of "top", "right", "bottom", "left".
   */
  origin?: "top" | "right" | "bottom" | "left" | "left top" | "top left" | "right top" |  "top right" | "left bottom" | "bottom left" | "right bottom" | "bottom right";

  /**
   * Set to true to always show the menu (mostly used for demonstration purposes).
   * @default false
   */
  permanent?: boolean;

  /**
   * Set to true to position the menu to the menu item (List Tile) that has class "selected".
   * @default false
   */
  reposition?: boolean;

  /**
   * HTML element selector to scroll to at appearance.
   * For example ".list-item-12".
   */
  scrollTarget?: string;

  /**
   * Depth of the shadow.
   * Number 0-5.
   * @default 3
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * Set to true to show the menu.
   * @default false
   */
  show?: boolean;

  /**
   * HTML element selector to position to.
   * For example "#my-button".
   */
  target?: string;

  /**
   * Set to true to make the menu appear full width at the top.
   * @default false
   */
  topMenu?: boolean;

  /**
   * Configures the appearance of the component.
   */
  transitions?: TransitionOptions;

  /**
   * Multiplication factor of width unit (56px).
   * With "auto" the menu takes the width of the widest element
   * Note that on smaller devices a large size may get clipped by the screen
   */
  width: "auto" | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 7;
  
}
