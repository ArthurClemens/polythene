import { stateComponent } from "polythene-react-base";
import { CoreRadioButton as component } from "polythene-core-radio-button";
import { SelectionControl, createControl } from "polythene-react-selection-control";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { createControl }));

export const RadioButton = stateComponent(Object.assign(
  {},
  component,
  {
    createProps,
    component: SelectionControl
  }
));

RadioButton.theme = component.theme;
RadioButton.displayName = "RadioButton";
