(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-radio-button'), require('polythene-core-selection-control'), require('polythene-react-icon'), require('polythene-react-icon-button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-radio-button', 'polythene-core-selection-control', 'polythene-react-icon', 'polythene-react-icon-button'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-radio-button'],global['polythene-core-selection-control'],global['polythene-react-icon'],global['polythene-react-icon-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreRadioButton,polytheneCoreSelectionControl,polytheneReactIcon,polytheneReactIconButton) { 'use strict';

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = polytheneReactBase.ViewComponent(_extends$2({}, polytheneCoreSelectionControl.viewControl, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreSelectionControl.viewControl.createContent(vnode, _extends$2(args, { Icon: polytheneReactIcon.Icon, IconButton: polytheneReactIconButton.IconButton }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = polytheneReactBase.StateComponent(_extends$1({}, polytheneCoreSelectionControl.coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreSelectionControl.coreSelectionControl.createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioButton = polytheneReactBase.StateComponent(_extends({}, polytheneCoreRadioButton.coreRadioButton, {
  component: SelectionControl
}));

RadioButton.displayName = "RadioButton";

exports.RadioButton = RadioButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-radio-button.js.map
