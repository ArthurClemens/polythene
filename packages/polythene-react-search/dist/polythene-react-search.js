(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-search'), require('polythene-react-textfield')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-search', 'polythene-react-textfield'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-search'],global['polythene-react-textfield']));
}(this, (function (exports,polytheneReactBase,polytheneCoreSearch,polytheneReactTextfield) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Search = polytheneReactBase.StateComponent(_extends({}, polytheneCoreSearch.coreSearch, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreSearch.coreSearch.createContent(vnode, _extends(args, { TextField: polytheneReactTextfield.TextField }));
    }
  }));

  Search.displayName = "Search";

  exports.Search = Search;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-search.js.map
