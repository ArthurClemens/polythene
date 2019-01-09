// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreSelectionControl as core } from "polythene-core-selection-control";
import { ViewControl } from "./view-control";

export const SelectionControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { ViewControl })),
});

SelectionControl["displayName"] = "SelectionControl";
