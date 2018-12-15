(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-list'), require('polythene-mithril-list-tile')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-list', 'polythene-mithril-list-tile'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-list'],global['polythene-mithril-list-tile']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreList,polytheneMithrilListTile) { 'use strict';

  const List = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreList.coreList, {
    createProps: (vnode, args) => polytheneCoreList.coreList.createProps(vnode, Object.assign(args, {
      ListTile: polytheneMithrilListTile.ListTile
    })),
    createContent: (vnode, args) => polytheneCoreList.coreList.createContent(vnode, Object.assign(args, {
      ListTile: polytheneMithrilListTile.ListTile
    }))
  }));
  List.displayName = "List";

  exports.List = List;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-list.js.map
