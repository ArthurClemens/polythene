import { CyanoComponentOptions } from "polythene-core";
import { SelectionControlOptions, ViewControlOptions } from "polythene-core-selection-control";

export interface Options extends SelectionControlOptions, ViewControlOptions {

  /**
   * Input element name.
   * Required when using RadioButton with RadioGroup.
   */
  name?: string;

}

export const _RadioButton: (options: CyanoComponentOptions & Options) => any;
