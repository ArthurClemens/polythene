(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-tabs'), require('polythene-mithril-icon'), require('polythene-mithril-button'), require('polythene-mithril-icon-button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-tabs', 'polythene-mithril-icon', 'polythene-mithril-button', 'polythene-mithril-icon-button'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-tabs'],global['polythene-mithril-icon'],global['polythene-mithril-button'],global['polythene-mithril-icon-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreTabs,polytheneMithrilIcon,polytheneMithrilButton,polytheneMithrilIconButton) { 'use strict';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tab = polytheneMithrilBase.ViewComponent(_extends$1({}, polytheneCoreTabs.coreTab, {
  createProps: function createProps(vnode, args) {
    return polytheneCoreTabs.coreTab.createProps(vnode, _extends$1(args, { Icon: polytheneMithrilIcon.Icon }));
  },
  component: polytheneMithrilButton.Button
}));

Tab.displayName = "Tab";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ScrollButton = polytheneMithrilBase.ViewComponent(_extends$2({}, polytheneCoreTabs.coreScrollButton, {
  component: polytheneMithrilIconButton.IconButton
}));

ScrollButton.displayName = "ScrollButton";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tabs = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreTabs.coreTabs, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreTabs.coreTabs.createContent(vnode, _extends(args, { Tab: Tab, ScrollButton: ScrollButton }));
  }
}));

Tabs.displayName = "Tabs";

exports.Tabs = Tabs;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-tabs.js.map
