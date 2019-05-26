import { CyanoComponentOptions } from "polythene-core";
import { Options as BaseSpinnerOptions } from "polythene-core-base-spinner";

export interface Options extends BaseSpinnerOptions {

  /**
   * Sets the progress percentage value between 0 and 1.
   */
  percentage: number;

  /**
   * Set to true to animate the progress between subsequent steps.
   * @default false
   */
  animated?: boolean;

  /**
   * The duration of the step progress update.
   * @default 0.8
   */
  updateDuration?: number;

}

export const _Spinner: (options: CyanoComponentOptions & Options) => any;
