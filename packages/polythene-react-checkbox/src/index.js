import { stateComponent } from "polythene-react-base";
import { CoreCheckbox as component } from "polythene-core-checkbox";
import { SelectionControl, createControl } from "polythene-react-selection-control";

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
Checkbox.displayName = "Checkbox";
