// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreSwitch as core } from "polythene-core-switch";
import { SelectionControl } from "./selection-control";

export const Switch = ComponentCreator({
  ...core,
  component: SelectionControl
});

Switch["displayName"] = "Switch";
