import { CommonOptions, TransitionOptions, CoreComponentCreatorOptions } from "./node_modules/polythene-core/polythene-core";

export interface Options extends Partial<CommonOptions> {

  /* START COMMON OPTIONS */

  /**
   * Options object containing one or more standard events such as onclick (React: onClick).
   */
  events?: object;

  /**
   * Configures the appearance of the component.
   */
  transitions?: Partial<TransitionOptions>;

  /* END COMMON OPTIONS */

  /**
   * Set to true to always show the spinner (mostly used for demonstration purposes).
   * @default false
   */
  permanent?: boolean;

  /**
   * Set to true to create a FAB-like appearance with shadow and whitespace around the spinner.
   * @default false
   */
  raised?: boolean;

  /**
   * Depth of the shadow.
   * Only if `raised` is true.
   * @default 1
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * Set to true to show the spinner.
   * @boolean false
   */
  show?: boolean;

  /**
   * Spinner size.
   * @efault "regular"
   */
  size?: "small" | "regular" | "medium" | "large" | "fab"

}

export const coreBaseSpinner: CoreComponentCreatorOptions;
