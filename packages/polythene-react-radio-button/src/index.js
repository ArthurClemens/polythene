import { StateComponent } from "polythene-react-base";
import { coreRadioButton as core } from "polythene-core-radio-button";
import { SelectionControl } from "./selection-control";

export const RadioButton = StateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

RadioButton.displayName = "RadioButton";
