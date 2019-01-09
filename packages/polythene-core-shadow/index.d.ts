import { CommonOptions, CoreComponentCreatorOptions } from "polythene-core";

export interface Options extends Partial<CommonOptions> {

  /**
   * Set to true to animate the shadow when setting a new z value.
   * @default false
   */
  animated?: boolean;

  /**
   * Depth of the shadow.
   * Value 0 results in no shadow.
   * @default 1
   */
  shadowDepth?: 0 | 1 | 2 |3 | 4 | 5;

  /**
   * Any content.
   */
  content?: any;

  /**
   * Alternative content.
   */
  children?: any;

}

export const coreShadow: CoreComponentCreatorOptions;