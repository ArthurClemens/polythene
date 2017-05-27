import { stateComponent } from "polythene-react-base";
import { CoreSelectionControl as component } from "polythene-core-selection-control";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";

const createControl = component.createControl;
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon, IconButton }));

export const SelectionControl = stateComponent(Object.assign(
  {},
  component,
  {
    createContent
  }
));

export { createControl };
