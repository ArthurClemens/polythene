(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-base-spinner'), require('polythene-mithril-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-base-spinner', 'polythene-mithril-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-base-spinner'],global['polythene-mithril-shadow']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreBaseSpinner,polytheneMithrilShadow) { 'use strict';

  var classes = {
    component: "pe-spinner",

    // elements
    animation: "pe-spinner__animation",
    placeholder: "pe-spinner__placeholder",

    // states
    animated: "pe-spinner--animated",
    fab: "pe-spinner--fab",
    large: "pe-spinner--large",
    medium: "pe-spinner--medium",
    permanent: "pe-spinner--permanent",
    raised: "pe-spinner--raised",
    regular: "pe-spinner--regular",
    singleColor: "pe-spinner--single-color",
    small: "pe-spinner--small",
    visible: "pe-spinner--visible"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var BaseSpinner = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreBaseSpinner.coreBaseSpinner, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreBaseSpinner.coreBaseSpinner.createContent(vnode, _extends(args, { Shadow: polytheneMithrilShadow.Shadow }));
    }
  }));

  BaseSpinner.classes = classes;
  BaseSpinner.displayName = "BaseSpinner";

  exports.BaseSpinner = BaseSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-base-spinner.js.map
