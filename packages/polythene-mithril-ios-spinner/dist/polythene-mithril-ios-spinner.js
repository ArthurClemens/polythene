(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core'), require('polythene-core-ios-spinner'), require('polythene-mithril-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core', 'polythene-core-ios-spinner', 'polythene-mithril-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core'],global['polythene-core-ios-spinner'],global['polythene-mithril-base-spinner']));
}(this, (function (exports,polytheneMithrilBase,polytheneCore,polytheneCoreIosSpinner,polytheneMithrilBaseSpinner) { 'use strict';

  var classes = {
    component: "pe-ios-spinner",
    // elements
    blades: "pe-ios-spinner__blades",
    blade: "pe-ios-spinner__blade"
  };

  var baseSpinnerClasses = {
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

  const SpinnerInstance = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreIosSpinner.coreIOSSpinner, {
    component: polytheneMithrilBaseSpinner.BaseSpinner
  }));
  const SpinnerToggle = polytheneMithrilBase.StateComponent(polytheneCore.Conditional);
  SpinnerToggle.displayName = "IOSSpinnerToggle";
  const IOSSpinner = {
    view: vnode => polytheneMithrilBase.renderer(SpinnerToggle, Object.assign({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }))
  };
  IOSSpinner.classes = classes;
  IOSSpinner.displayName = "IOSSpinner";

  exports.IOSSpinner = IOSSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-ios-spinner.js.map
