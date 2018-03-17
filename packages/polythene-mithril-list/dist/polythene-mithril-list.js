(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-list'), require('polythene-mithril-list-tile')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-list', 'polythene-mithril-list-tile'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-list'],global['polythene-mithril-list-tile']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreList,polytheneMithrilListTile) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var List = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreList.coreList, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreList.coreList.createProps(vnode, _extends(args, { ListTile: polytheneMithrilListTile.ListTile }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreList.coreList.createContent(vnode, _extends(args, { ListTile: polytheneMithrilListTile.ListTile }));
    }
  }));

  List.displayName = "List";

  exports.List = List;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-list.js.map
