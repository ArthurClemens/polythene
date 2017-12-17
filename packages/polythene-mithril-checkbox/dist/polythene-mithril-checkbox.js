(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-checkbox'), require('polythene-core-selection-control'), require('polythene-mithril-icon'), require('polythene-mithril-icon-button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-checkbox', 'polythene-core-selection-control', 'polythene-mithril-icon', 'polythene-mithril-icon-button'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-checkbox'],global['polythene-core-selection-control'],global['polythene-mithril-icon'],global['polythene-mithril-icon-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreCheckbox,polytheneCoreSelectionControl,polytheneMithrilIcon,polytheneMithrilIconButton) { 'use strict';

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = polytheneMithrilBase.ViewComponent(_extends$2({}, polytheneCoreSelectionControl.viewControl, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreSelectionControl.viewControl.createContent(vnode, _extends$2(args, { Icon: polytheneMithrilIcon.Icon, IconButton: polytheneMithrilIconButton.IconButton }));
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

var Checkbox = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreCheckbox.coreCheckbox, {
  component: SelectionControl
}));

Checkbox.displayName = "Checkbox";

exports.Checkbox = Checkbox;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-checkbox.js.map
