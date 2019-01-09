// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreCheckbox as core } from "polythene-core-checkbox";
import { SelectionControl } from "./selection-control";

export const Checkbox = ComponentCreator({
  ...core,
  component: SelectionControl
});

Checkbox["displayName"] = "Checkbox";
