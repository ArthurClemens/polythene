(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-search'), require('polythene-mithril-textfield')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-search', 'polythene-mithril-textfield'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-search'],global['polythene-mithril-textfield']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreSearch,polytheneMithrilTextfield) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Search = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreSearch.coreSearch, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreSearch.coreSearch.createContent(vnode, _extends(args, { TextField: polytheneMithrilTextfield.TextField }));
  }
}));

Search.displayName = "Search";

exports.Search = Search;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-search.js.map
