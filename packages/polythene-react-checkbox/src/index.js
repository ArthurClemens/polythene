import { StateComponent } from "polythene-react-base";
import { coreCheckbox as core } from "polythene-core-checkbox";
import { SelectionControl } from "./selection-control";

export const Checkbox = StateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

Checkbox.theme = core.theme;
Checkbox.displayName = "Checkbox";
