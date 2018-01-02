(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-switch'), require('polythene-core-selection-control'), require('polythene-mithril-shadow'), require('polythene-mithril-icon-button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-switch', 'polythene-core-selection-control', 'polythene-mithril-shadow', 'polythene-mithril-icon-button'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-switch'],global['polythene-core-selection-control'],global['polythene-mithril-shadow'],global['polythene-mithril-icon-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreSwitch,polytheneCoreSelectionControl,polytheneMithrilShadow,polytheneMithrilIconButton) { 'use strict';

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = polytheneMithrilBase.ViewComponent(_extends$2({}, polytheneCoreSwitch.viewControl, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreSwitch.viewControl.createContent(vnode, _extends$2(args, { Shadow: polytheneMithrilShadow.Shadow, IconButton: polytheneMithrilIconButton.IconButton }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = polytheneMithrilBase.StateComponent(_extends$1({}, polytheneCoreSelectionControl.coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreSelectionControl.coreSelectionControl.createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Switch = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreSwitch.coreSwitch, {
  component: SelectionControl
}));

Switch.displayName = "Switch";

exports.Switch = Switch;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-switch.js.map
