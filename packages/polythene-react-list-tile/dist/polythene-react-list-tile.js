(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-list-tile'), require('polythene-react-icon'), require('polythene-react-ripple')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-list-tile', 'polythene-react-icon', 'polythene-react-ripple'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-list-tile'],global['polythene-react-icon'],global['polythene-react-ripple']));
}(this, (function (exports,polytheneReactBase,polytheneCoreListTile,polytheneReactIcon,polytheneReactRipple) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var ListTile = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreListTile.coreListTile, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreListTile.coreListTile.createProps(vnode, _extends(args, { Icon: polytheneReactIcon.Icon, Ripple: polytheneReactRipple.Ripple }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreListTile.coreListTile.createContent(vnode, _extends(args, { Icon: polytheneReactIcon.Icon, Ripple: polytheneReactRipple.Ripple }));
    }
  }));

  ListTile.displayName = "ListTile";

  exports.ListTile = ListTile;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-list-tile.js.map
