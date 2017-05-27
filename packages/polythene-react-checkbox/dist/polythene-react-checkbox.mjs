import { stateComponent } from 'polythene-react-base';
import { CoreCheckbox } from 'polythene-core-checkbox';
import { SelectionControl, createControl } from 'polythene-react-selection-control';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreCheckbox.createProps(vnode, _extends(args, { createControl: createControl }));
};

var Checkbox = stateComponent(_extends({}, CoreCheckbox, {
  createProps: createProps,
  component: SelectionControl
}));

Checkbox.theme = CoreCheckbox.theme;
Checkbox.displayName = "Checkbox";

export { Checkbox };
