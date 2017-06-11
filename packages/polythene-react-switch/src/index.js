import { StateComponent } from "polythene-react-base";
import { coreSwitch as core } from "polythene-core-switch";
import { SelectionControl } from "./selection-control";

export const Switch = StateComponent(Object.assign(
  {},
  core,
  {
    component: SelectionControl
  }
));

Switch.theme = core.theme;
Switch.displayName = "Switch";
