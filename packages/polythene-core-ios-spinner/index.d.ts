import { CoreComponentCreatorOptions } from "./node_modules/polythene-core";
import { Options as SpinnerOptions } from "./node_modules/polythene-core-base-spinner";

export interface Options extends SpinnerOptions {

  /**
   * Set to true to use only one color (by default the primary color).
   * @default false
   */
  singleColor?: boolean;

}

export const coreIOSSpinner: CoreComponentCreatorOptions;
