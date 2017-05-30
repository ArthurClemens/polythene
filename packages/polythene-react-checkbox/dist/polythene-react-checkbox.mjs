import { stateComponent, viewComponent } from 'polythene-react-base';
import { coreCheckbox } from 'polythene-core-checkbox';
import { coreSelectionControl, viewControl } from 'polythene-core-selection-control';
import { Icon } from 'polythene-react-icon';
import { IconButton } from 'polythene-react-icon-button';

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = viewComponent(_extends$2({}, viewControl, {
  createContent: function createContent(vnode, args) {
    return viewControl.createContent(vnode, _extends$2(args, { Icon: Icon, IconButton: IconButton }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = stateComponent(_extends$1({}, coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return coreSelectionControl.createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Checkbox = stateComponent(_extends({}, coreCheckbox, {
  component: SelectionControl
}));

Checkbox.theme = coreCheckbox.theme;
Checkbox.displayName = "Checkbox";

export { Checkbox };
