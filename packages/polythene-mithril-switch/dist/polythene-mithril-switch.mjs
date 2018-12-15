import { coreSelectionControl } from 'polythene-core-selection-control';
import { ViewComponent, StateComponent } from 'polythene-mithril-base';
import { viewControl, coreSwitch } from 'polythene-core-switch';
import { Shadow } from 'polythene-mithril-shadow';
import { IconButton } from 'polythene-mithril-icon-button';

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
