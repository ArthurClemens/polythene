(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-search'), require('polythene-react-textfield')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-search', 'polythene-react-textfield'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-search'],global['polythene-react-textfield']));
}(this, (function (exports,polytheneReactBase,polytheneCoreSearch,polytheneReactTextfield) { 'use strict';

  const Search = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreSearch.coreSearch, {
    createContent: (vnode, args) => polytheneCoreSearch.coreSearch.createContent(vnode, Object.assign(args, {
      TextField: polytheneReactTextfield.TextField
    }))
  }));
  Search.displayName = "Search";

  exports.Search = Search;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-search.js.map
