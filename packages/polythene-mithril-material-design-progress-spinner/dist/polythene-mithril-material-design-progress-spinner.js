(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core'), require('polythene-core-material-design-progress-spinner'), require('polythene-mithril-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core', 'polythene-core-material-design-progress-spinner', 'polythene-mithril-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core'],global['polythene-core-material-design-progress-spinner'],global['polythene-mithril-base-spinner']));
}(this, (function (exports,polytheneMithrilBase,polytheneCore,polytheneCoreMaterialDesignProgressSpinner,polytheneMithrilBaseSpinner) { 'use strict';

  var classes = {
    component: "pe-md-progress-spinner",
    // elements
    animation: "pe-md-progress-spinner__animation",
    circle: "pe-md-progress-spinner__circle",
    circleRight: "pe-md-progress-spinner__circle-right",
    circleLeft: "pe-md-progress-spinner__circle-left"
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

  const SpinnerInstance = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreMaterialDesignProgressSpinner.coreMaterialDesignProgressSpinner, {
    component: polytheneMithrilBaseSpinner.BaseSpinner
  }));
  const SpinnerToggle = polytheneMithrilBase.StateComponent(polytheneCore.Conditional);
  SpinnerToggle.displayName = "MaterialDesignProgressSpinnerToggle";
  const MaterialDesignProgressSpinner = {
    view: vnode => polytheneMithrilBase.renderer(SpinnerToggle, Object.assign({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }))
  };
  MaterialDesignProgressSpinner.classes = classes;
  MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";

  exports.MaterialDesignProgressSpinner = MaterialDesignProgressSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-material-design-progress-spinner.js.map
