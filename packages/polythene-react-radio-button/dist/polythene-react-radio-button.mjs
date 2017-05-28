import { stateComponent } from 'polythene-react-base';
import { CoreRadioButton } from 'polythene-core-radio-button';
import { SelectionControl, createControl } from 'polythene-react-selection-control';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreRadioButton.createProps(vnode, _extends(args, { createControl: createControl }));
};

var RadioButton = stateComponent(_extends({}, CoreRadioButton, {
  createProps: createProps,
  component: SelectionControl
}));

RadioButton.theme = CoreRadioButton.theme;
RadioButton.displayName = "RadioButton";

export { RadioButton };
