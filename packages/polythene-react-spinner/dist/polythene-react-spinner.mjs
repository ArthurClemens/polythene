import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { coreBaseSpinner, coreMaterialDesignProgressSpinner, coreMaterialDesignSpinner, coreiOSSpinner } from 'polythene-core-spinner';
import { Shadow } from 'polythene-react-shadow';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = StateComponent(_extends$1({}, coreBaseSpinner, {
  createContent: function createContent(vnode, args) {
    return coreBaseSpinner.createContent(vnode, _extends$1(args, { Shadow: Shadow }));
  }
}));

BaseSpinner.displayName = "BaseSpinner";
BaseSpinner.classes = coreBaseSpinner.classes;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = StateComponent(_extends({}, coreiOSSpinner, { component: BaseSpinner }));

var SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "SpinnerToggle";

var iOSSpinner = function iOSSpinner(props) {
  return renderer(SpinnerToggle, _extends({}, props, {
    placeholderClassName: BaseSpinner.classes.placeholder,
    instance: SpinnerInstance
  }));
};

iOSSpinner.theme = coreiOSSpinner.theme;
iOSSpinner.classes = coreiOSSpinner.classes;
iOSSpinner.displayName = "iOSSpinner";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance$1 = StateComponent(_extends$2({}, coreMaterialDesignSpinner, { component: BaseSpinner }));

var SpinnerToggle$1 = StateComponent(Conditional);
SpinnerToggle$1.displayName = "SpinnerToggle";

var MaterialDesignSpinner = function MaterialDesignSpinner(props) {
  return renderer(SpinnerToggle$1, _extends$2({}, props, {
    placeholderClassName: BaseSpinner.classes.placeholder,
    instance: SpinnerInstance$1
  }));
};

MaterialDesignSpinner.theme = coreMaterialDesignSpinner.theme;
MaterialDesignSpinner.classes = coreMaterialDesignSpinner.classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance$2 = StateComponent(_extends$3({}, coreMaterialDesignProgressSpinner, { component: BaseSpinner }));

var SpinnerToggle$2 = StateComponent(Conditional);
SpinnerToggle$2.displayName = "SpinnerToggle";

var MaterialDesignProgressSpinner = function MaterialDesignProgressSpinner(props) {
  return renderer(SpinnerToggle$2, _extends$3({}, props, {
    placeholderClassName: BaseSpinner.classes.placeholder,
    instance: SpinnerInstance$2
  }));
};

MaterialDesignProgressSpinner.theme = coreMaterialDesignProgressSpinner.theme;
MaterialDesignProgressSpinner.classes = coreMaterialDesignProgressSpinner.classes;
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";

export { iOSSpinner, MaterialDesignSpinner, MaterialDesignProgressSpinner };
