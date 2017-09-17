import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { classes, coreMaterialDesignProgressSpinner } from 'polythene-core-material-design-progress-spinner';
import { BaseSpinner } from 'polythene-react-base-spinner';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = StateComponent(_extends({}, coreMaterialDesignProgressSpinner, { component: BaseSpinner }));

var SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "MaterialDesignProgressSpinnerToggle";

var MaterialDesignProgressSpinner = function MaterialDesignProgressSpinner(props) {
  return renderer(SpinnerToggle, _extends({}, props, {
    placeholderClassName: BaseSpinner.classes.placeholder,
    instance: SpinnerInstance
  }));
};

MaterialDesignProgressSpinner.classes = classes;
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";

export { MaterialDesignProgressSpinner };
