import { CoreComponentCreatorOptions } from "polythene-core";
import { Options as SpinnerOptions } from "polythene-core-base-spinner";

export interface Options extends SpinnerOptions {

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

export const coreMaterialDesignProgressSpinner: CoreComponentCreatorOptions;

