import { CyanoComponentOptions } from "polythene-core";
import { SelectionControlOptions, ViewControlOptions } from "polythene-core-selection-control";

export interface Options extends SelectionControlOptions {

  /**
   * Shows a shadow below the thumb; when the Switch state is on, the depth is incremented by 1.
   * @default true
   */
  raised?: boolean;

  /**
   * Set to false to always hide the wash (radial feedback).
   * Note that a (hidden) wash is still drawn to create a large tap target.
   * The default is `true` on touch devices.
   * @default true
   */
  wash?: boolean;

  /**
   * The shadow depth for the thumb in off state.
   * Value 0-5.
   * @default 1
   */
  shadowDepthOff?: number;

  /**
   * The shadow depth for the thumb in on state.
   * Value 0-5.
   * @default 2
   */
  shadowDepthOn?: number;

}

export const _Switch: (options: CyanoComponentOptions & Options) => any;
export const _ViewControl: (options: CyanoComponentOptions & ViewControlOptions) => any;
