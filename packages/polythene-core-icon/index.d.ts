import { CommonOptions, CoreComponentCreatorOptions } from "polythene-core";
import { Options as SVGOptions } from "polythene-core-svg";

interface CommonIconOptions extends Partial<CommonOptions> {

  /* START COMMON OPTIONS */

  /**
   * Options object containing one or more standard events such as onclick (React: onClick).
   */
  events?: object;

  /* END COMMON OPTIONS */

  /**
   * SVG options object.
   */
  svg?: SVGOptions;

  /**
   * Icon image URL. Creates an `img` element.
   */
  src?: string;

  /**
   * Sets the size: either "small" (16px), "regular" (24px), "medium" (32px), "large" (40px). Adds CSS class pe-icon--small, etcetera.
   * @default "regular"
   */
  size?: string;

  /**
   * Set to true to add class pe-icon--avatar which creates a round portrait image.
   * @default false
   */
  avatar?: boolean;

  /**
   * Alternative image content.
   */
  children?: any;
}

export type Options = CommonIconOptions;

export const coreIcon: CoreComponentCreatorOptions;
