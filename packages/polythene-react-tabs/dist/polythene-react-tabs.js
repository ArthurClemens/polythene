(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-tabs'), require('polythene-react-icon'), require('polythene-react-button'), require('polythene-react-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-tabs', 'polythene-react-icon', 'polythene-react-button', 'polythene-react-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-tabs'],global['polythene-react-icon'],global['polythene-react-button'],global['polythene-react-icon-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreTabs,polytheneReactIcon,polytheneReactButton,polytheneReactIconButton) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Tab = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreTabs.coreTab, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreTabs.coreTab.createProps(vnode, _extends(args, { Icon: polytheneReactIcon.Icon }));
    },
    component: polytheneReactButton.Button
  }));

  Tab.displayName = "Tab";

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var ScrollButton = polytheneReactBase.ViewComponent(_extends$1({}, polytheneCoreTabs.coreScrollButton, {
    component: polytheneReactIconButton.IconButton
  }));

  ScrollButton.displayName = "ScrollButton";

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Tabs = polytheneReactBase.StateComponent(_extends$2({}, polytheneCoreTabs.coreTabs, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreTabs.coreTabs.createContent(vnode, _extends$2(args, { Tab: Tab, ScrollButton: ScrollButton }));
    }
  }));

  Tabs.displayName = "Tabs";

  exports.Tabs = Tabs;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-tabs.js.map
