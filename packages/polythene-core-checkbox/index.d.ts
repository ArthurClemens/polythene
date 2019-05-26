import { CyanoComponentOptions } from "polythene-core";
import { SelectionControlOptions, ViewControlOptions } from "polythene-core-selection-control";

export interface Options extends SelectionControlOptions, ViewControlOptions {}

export const _Checkbox: (options: CyanoComponentOptions & Options) => any;
