(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-fab'), require('polythene-mithril-icon'), require('polythene-mithril-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-fab', 'polythene-mithril-icon', 'polythene-mithril-button'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-fab'],global['polythene-mithril-icon'],global['polythene-mithril-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreFab,polytheneMithrilIcon,polytheneMithrilButton) { 'use strict';

  const FAB = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreFab.coreFAB, {
    createProps: (vnode, args) => polytheneCoreFab.coreFAB.createProps(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon
    })),
    createContent: (vnode, args) => polytheneCoreFab.coreFAB.createContent(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon
    })),
    component: polytheneMithrilButton.Button
  }));
  FAB.displayName = "FAB";

  exports.FAB = FAB;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-fab.js.map
