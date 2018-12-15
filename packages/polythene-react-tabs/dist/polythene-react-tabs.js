(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-icon'), require('polythene-react-button'), require('polythene-react-base'), require('polythene-core-tabs'), require('polythene-react-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-icon', 'polythene-react-button', 'polythene-react-base', 'polythene-core-tabs', 'polythene-react-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-react-icon'],global['polythene-react-button'],global['polythene-react-base'],global['polythene-core-tabs'],global['polythene-react-icon-button']));
}(this, (function (exports,polytheneReactIcon,polytheneReactButton,polytheneReactBase,polytheneCoreTabs,polytheneReactIconButton) { 'use strict';

  const Tab = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreTabs.coreTab, {
    createProps: (vnode, args) => polytheneCoreTabs.coreTab.createProps(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon
    })),
    component: polytheneReactButton.Button
  }));
  Tab.displayName = "Tab";

  const ScrollButton = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreTabs.coreScrollButton, {
    component: polytheneReactIconButton.IconButton
  }));
  ScrollButton.displayName = "ScrollButton";

  const Tabs = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreTabs.coreTabs, {
    createContent: (vnode, args) => polytheneCoreTabs.coreTabs.createContent(vnode, Object.assign(args, {
      Tab,
      ScrollButton
    }))
  }));
  Tabs.displayName = "Tabs";

  exports.Tabs = Tabs;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-tabs.js.map
