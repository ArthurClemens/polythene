(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-icon'), require('polythene-mithril-svg')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-icon', 'polythene-mithril-svg'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-icon'],global['polythene-mithril-svg']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreIcon,polytheneMithrilSvg) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Icon = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreIcon.coreIcon, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreIcon.coreIcon.createProps(vnode, _extends(args, { SVG: polytheneMithrilSvg.SVG }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreIcon.coreIcon.createContent(vnode, _extends(args, { SVG: polytheneMithrilSvg.SVG }));
    }
  }));

  Icon.displayName = "Icon";

  exports.Icon = Icon;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-icon.js.map
