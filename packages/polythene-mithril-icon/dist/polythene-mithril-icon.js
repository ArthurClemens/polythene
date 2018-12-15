(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-icon'), require('polythene-mithril-svg')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-icon', 'polythene-mithril-svg'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-icon'],global['polythene-mithril-svg']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreIcon,polytheneMithrilSvg) { 'use strict';

  const Icon = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreIcon.coreIcon, {
    createProps: (vnode, args) => polytheneCoreIcon.coreIcon.createProps(vnode, Object.assign(args, {
      SVG: polytheneMithrilSvg.SVG
    })),
    createContent: (vnode, args) => polytheneCoreIcon.coreIcon.createContent(vnode, Object.assign(args, {
      SVG: polytheneMithrilSvg.SVG
    }))
  }));
  Icon.displayName = "Icon";

  exports.Icon = Icon;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-icon.js.map
