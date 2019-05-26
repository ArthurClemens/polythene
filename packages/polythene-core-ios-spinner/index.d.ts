import { CyanoComponentOptions } from "polythene-core";
import { Options as BaseSpinnerOptions } from "polythene-core-base-spinner";

export interface Options extends BaseSpinnerOptions {

  /**
   * Set to true to use only one color (by default the primary color).
   * @default false
   */
  singleColor?: boolean;

}

export const _Spinner: (options: CyanoComponentOptions & Options) => any;
