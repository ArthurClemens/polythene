import { StateComponent } from "polythene-mithril-base";
import { coreCheckbox as core } from "polythene-core-checkbox";
import { SelectionControl } from "./selection-control";

export const Checkbox = StateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

Checkbox.displayName = "Checkbox";
