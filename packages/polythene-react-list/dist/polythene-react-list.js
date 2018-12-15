(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-list'), require('polythene-react-list-tile')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-list', 'polythene-react-list-tile'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-list'],global['polythene-react-list-tile']));
}(this, (function (exports,polytheneReactBase,polytheneCoreList,polytheneReactListTile) { 'use strict';

  const List = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreList.coreList, {
    createProps: (vnode, args) => polytheneCoreList.coreList.createProps(vnode, Object.assign(args, {
      ListTile: polytheneReactListTile.ListTile
    })),
    createContent: (vnode, args) => polytheneCoreList.coreList.createContent(vnode, Object.assign(args, {
      ListTile: polytheneReactListTile.ListTile
    }))
  }));
  List.displayName = "List";

  exports.List = List;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-list.js.map
