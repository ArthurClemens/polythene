(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-list'), require('polythene-react-list-tile')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-list', 'polythene-react-list-tile'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-list'],global['polythene-react-list-tile']));
}(this, (function (exports,polytheneReactBase,polytheneCoreList,polytheneReactListTile) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var List = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreList.coreList, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreList.coreList.createProps(vnode, _extends(args, { ListTile: polytheneReactListTile.ListTile }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreList.coreList.createContent(vnode, _extends(args, { ListTile: polytheneReactListTile.ListTile }));
    }
  }));

  List.displayName = "List";

  exports.List = List;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-list.js.map
