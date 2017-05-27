import { stateComponent } from "polythene-mithril-base";
import { CoreCheckbox as component } from "polythene-core-checkbox";
import { SelectionControl, createControl } from "polythene-mithril-selection-control";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { createControl }));

export const Checkbox = stateComponent(Object.assign(
  {},
  component,
  {
    createProps,
    component: SelectionControl
  }
));

Checkbox.theme = component.theme;
