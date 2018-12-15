(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-search'), require('polythene-mithril-textfield')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-search', 'polythene-mithril-textfield'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-search'],global['polythene-mithril-textfield']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreSearch,polytheneMithrilTextfield) { 'use strict';

  const Search = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreSearch.coreSearch, {
    createContent: (vnode, args) => polytheneCoreSearch.coreSearch.createContent(vnode, Object.assign(args, {
      TextField: polytheneMithrilTextfield.TextField
    }))
  }));
  Search.displayName = "Search";

  exports.Search = Search;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-search.js.map
