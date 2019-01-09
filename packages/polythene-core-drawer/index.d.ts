import { CoreComponentCreatorOptions } from "polythene-core";
import { Options as DialogOptions, AppearanceOptions as DialogAppearanceOptions } from "polythene-core-dialog";

export interface Options extends DialogOptions, DialogAppearanceOptions {

  /**
   * Drawer content.
   */
  content?: any;

  /**
   * Set to "end" to reveal the drawer from the far (right) side; with RTL "end" becomes the left side.
   * @default "start"
   */  
  anchor?: "start" | "end";

  /**
   * Useful with a permanent or pushing drawer when no shadow is used; set to true to create a border at the right side; with RTL the border is shown at the left side.
   * @default false
   */
  border?: boolean;

  /**
   * Set to true to display the drawer as a permanent side menu.
   * @default false
   */
  permanent?: boolean;

  /**
   * Set to true to give the drawer CSS property position: fixed.
   * Useful for an app drawer (that must be shown covering all content) when it is drawn from a deeper component.
   * @default false
   */
  fixed?: boolean;

  /**
   * Variant of `permanent`; additionally set this to true to display the drawer as a "floating" block (instead of full height).
   * @default false
   */
  floating?: boolean;

  /**
   * Set to true to display a fraction of the drawer (typically to show the icons only), and to reveal the full menu when expanding.
   * @default false
   */
  mini?: boolean;

  /**
   * Set to true to create a modal drawer; tapping the backdrop or pressing ESCAPE will not close the drawer.
   * @default false
   */
  modal?: boolean;

  /**
   * Set to true to animate the drawer with a push animation, pushing away the content next to the drawer.
   * @default false
   */
  push?: boolean;

  /**
   * Depth of the shadow; 0 will show no shadow.
   * Number 0-5.
   * @default 0
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * Set to true to reveal the drawer; false to hide a displayed drawer.
   * @default false
   */
  show?: boolean;

  /**
   * Generated HTML element.
   * @default "div"
   */
  element?: string;

}

export const coreDrawer: CoreComponentCreatorOptions;
