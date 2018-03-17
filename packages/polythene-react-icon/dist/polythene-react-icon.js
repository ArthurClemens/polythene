(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-icon'), require('polythene-react-svg')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-icon', 'polythene-react-svg'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-icon'],global['polythene-react-svg']));
}(this, (function (exports,polytheneReactBase,polytheneCoreIcon,polytheneReactSvg) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Icon = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreIcon.coreIcon, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreIcon.coreIcon.createProps(vnode, _extends(args, { SVG: polytheneReactSvg.SVG }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreIcon.coreIcon.createContent(vnode, _extends(args, { SVG: polytheneReactSvg.SVG }));
    }
  }));

  Icon.displayName = "Icon";

  exports.Icon = Icon;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-icon.js.map
