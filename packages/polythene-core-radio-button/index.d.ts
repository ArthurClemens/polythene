import { CoreComponentCreatorOptions } from "polythene-core";
import { Options as SelectionControlOptions, IconOptions } from "polythene-core-selection-control";

export interface Options extends SelectionControlOptions, IconOptions {

  /**
   * Input element name.
   * Required when using RadioButton with RadioGroup.
   */
  name?: string;

}

export const coreRadioButton: CoreComponentCreatorOptions;
