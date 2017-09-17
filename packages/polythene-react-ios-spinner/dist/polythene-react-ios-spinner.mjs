import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { classes, coreIOSSpinner } from 'polythene-core-ios-spinner';
import { BaseSpinner } from 'polythene-react-base-spinner';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = StateComponent(_extends({}, coreIOSSpinner, { component: BaseSpinner }));

var SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "IOSSpinnerToggle";

var IOSSpinner = function IOSSpinner(props) {
  return renderer(SpinnerToggle, _extends({}, props, {
    placeholderClassName: BaseSpinner.classes.placeholder,
    instance: SpinnerInstance
  }));
};

IOSSpinner.classes = classes;
IOSSpinner.displayName = "IOSSpinner";

export { IOSSpinner };
