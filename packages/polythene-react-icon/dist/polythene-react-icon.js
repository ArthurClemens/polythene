(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-icon'), require('polythene-react-svg')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-icon', 'polythene-react-svg'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-icon'],global['polythene-react-svg']));
}(this, (function (exports,polytheneReactBase,polytheneCoreIcon,polytheneReactSvg) { 'use strict';

  const Icon = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreIcon.coreIcon, {
    createProps: (vnode, args) => polytheneCoreIcon.coreIcon.createProps(vnode, Object.assign(args, {
      SVG: polytheneReactSvg.SVG
    })),
    createContent: (vnode, args) => polytheneCoreIcon.coreIcon.createContent(vnode, Object.assign(args, {
      SVG: polytheneReactSvg.SVG
    }))
  }));
  Icon.displayName = "Icon";

  exports.Icon = Icon;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-icon.js.map
