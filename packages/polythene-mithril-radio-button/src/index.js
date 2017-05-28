import { stateComponent } from "polythene-mithril-base";
import { CoreRadioButton as component } from "polythene-core-radio-button";
import { SelectionControl, createControl } from "polythene-mithril-selection-control";

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
