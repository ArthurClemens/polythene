(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-list-tile'), require('polythene-mithril-icon'), require('polythene-mithril-ripple')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-list-tile', 'polythene-mithril-icon', 'polythene-mithril-ripple'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-list-tile'],global['polythene-mithril-icon'],global['polythene-mithril-ripple']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreListTile,polytheneMithrilIcon,polytheneMithrilRipple) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var ListTile = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreListTile.coreListTile, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreListTile.coreListTile.createProps(vnode, _extends(args, { Icon: polytheneMithrilIcon.Icon, Ripple: polytheneMithrilRipple.Ripple }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreListTile.coreListTile.createContent(vnode, _extends(args, { Icon: polytheneMithrilIcon.Icon, Ripple: polytheneMithrilRipple.Ripple }));
    }
  }));

  ListTile.displayName = "ListTile";

  exports.ListTile = ListTile;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-list-tile.js.map
