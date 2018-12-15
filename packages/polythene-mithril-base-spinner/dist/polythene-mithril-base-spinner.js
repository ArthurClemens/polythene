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

  const BaseSpinner = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreBaseSpinner.coreBaseSpinner, {
    createContent: (vnode, args) => polytheneCoreBaseSpinner.coreBaseSpinner.createContent(vnode, Object.assign(args, {
      Shadow: polytheneMithrilShadow.Shadow
    }))
  }));
  BaseSpinner.classes = classes;
  BaseSpinner.displayName = "BaseSpinner";

  exports.BaseSpinner = BaseSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-base-spinner.js.map
