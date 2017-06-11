import { StateComponent, ViewComponent } from 'polythene-react-base';
import { coreSwitch, viewControl } from 'polythene-core-switch';
import { coreSelectionControl } from 'polythene-core-selection-control';
import { Shadow } from 'polythene-react-shadow';
import { IconButton } from 'polythene-react-icon-button';

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = ViewComponent(_extends$2({}, viewControl, {
  createContent: function createContent(vnode, args) {
    return viewControl.createContent(vnode, _extends$2(args, { Shadow: Shadow, IconButton: IconButton }));
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Switch = StateComponent(_extends({}, coreSwitch, {
  component: SelectionControl
}));

Switch.theme = coreSwitch.theme;
Switch.displayName = "Switch";

export { Switch };
