import { StateComponent } from "polythene-mithril-base";
import { coreSelectionControl as core } from "polythene-core-selection-control";
import { ViewControl } from "./view-control";

export const SelectionControl = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { ViewControl })),
  }
));

SelectionControl.displayName = "SelectionControl";
