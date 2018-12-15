(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-icon'), require('polythene-mithril-button'), require('polythene-mithril-base'), require('polythene-core-tabs'), require('polythene-mithril-icon-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-icon', 'polythene-mithril-button', 'polythene-mithril-base', 'polythene-core-tabs', 'polythene-mithril-icon-button'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-icon'],global['polythene-mithril-button'],global['polythene-mithril-base'],global['polythene-core-tabs'],global['polythene-mithril-icon-button']));
}(this, (function (exports,polytheneMithrilIcon,polytheneMithrilButton,polytheneMithrilBase,polytheneCoreTabs,polytheneMithrilIconButton) { 'use strict';

  const Tab = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreTabs.coreTab, {
    createProps: (vnode, args) => polytheneCoreTabs.coreTab.createProps(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon
    })),
    component: polytheneMithrilButton.Button
  }));
  Tab.displayName = "Tab";

  const ScrollButton = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreTabs.coreScrollButton, {
    component: polytheneMithrilIconButton.IconButton
  }));
  ScrollButton.displayName = "ScrollButton";

  const Tabs = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreTabs.coreTabs, {
    createContent: (vnode, args) => polytheneCoreTabs.coreTabs.createContent(vnode, Object.assign(args, {
      Tab,
      ScrollButton
    }))
  }));
  Tabs.displayName = "Tabs";

  exports.Tabs = Tabs;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-tabs.js.map
