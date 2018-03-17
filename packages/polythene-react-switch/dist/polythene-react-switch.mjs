import { ViewComponent, StateComponent } from 'polythene-react-base';
import { viewControl, coreSwitch } from 'polythene-core-switch';
import { Shadow } from 'polythene-react-shadow';
import { IconButton } from 'polythene-react-icon-button';
import { coreSelectionControl } from 'polythene-core-selection-control';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = ViewComponent(_extends({}, viewControl, {
  createContent: function createContent(vnode, args) {
    return viewControl.createContent(vnode, _extends(args, { Shadow: Shadow, IconButton: IconButton }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = StateComponent(_extends$1({}, coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return coreSelectionControl.createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Switch = StateComponent(_extends$2({}, coreSwitch, {
  component: SelectionControl
}));

Switch.displayName = "Switch";

export { Switch };
