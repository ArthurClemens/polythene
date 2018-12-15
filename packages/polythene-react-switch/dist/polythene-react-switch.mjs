import { coreSelectionControl } from 'polythene-core-selection-control';
import { ViewComponent, StateComponent } from 'polythene-react-base';
import { viewControl, coreSwitch } from 'polythene-core-switch';
import { Shadow } from 'polythene-react-shadow';
import { IconButton } from 'polythene-react-icon-button';

const ViewControl = ViewComponent(Object.assign({}, viewControl, {
  createContent: (vnode, args) => viewControl.createContent(vnode, Object.assign(args, {
    Shadow,
    IconButton
  }))
}));
ViewControl.displayName = "ViewControl";

const SelectionControl = StateComponent(Object.assign({}, coreSelectionControl, {
  createContent: (vnode, args) => coreSelectionControl.createContent(vnode, Object.assign(args, {
    ViewControl
  }))
}));
SelectionControl.displayName = "SelectionControl";

const Switch = StateComponent(Object.assign({}, coreSwitch, {
  component: SelectionControl
}));
Switch.displayName = "Switch";

export { Switch };
