import { ViewComponent, StateComponent } from 'polythene-mithril-base';
import { coreCheckbox } from 'polythene-core-checkbox';
import { viewControl, coreSelectionControl } from 'polythene-core-selection-control';
import { Icon } from 'polythene-mithril-icon';
import { IconButton } from 'polythene-mithril-icon-button';

const ViewControl = ViewComponent(Object.assign({}, viewControl, {
  createContent: (vnode, args) => viewControl.createContent(vnode, Object.assign(args, {
    Icon,
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

const Checkbox = StateComponent(Object.assign({}, coreCheckbox, {
  component: SelectionControl
}));
Checkbox.displayName = "Checkbox";

export { Checkbox };
