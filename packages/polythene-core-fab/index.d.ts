import { CommonOptions, CoreComponentCreatorOptions } from "polythene-core";
import { Options as ButtonOptions } from "polythene-core-button";
import { Options as IconOptions } from "polythene-core-icon";

export interface Options extends Partial<CommonOptions>, ButtonOptions {   

  /**
   * Icon options object.
   */
  icon?: IconOptions;

  /**
   * Set to true to display a small button.
   * @default false
   */
  mini?: boolean;

}

export const coreFAB: CoreComponentCreatorOptions;
