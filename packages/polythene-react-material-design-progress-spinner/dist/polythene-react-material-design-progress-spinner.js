(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-material-design-progress-spinner'), require('polythene-react-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-material-design-progress-spinner', 'polythene-react-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-material-design-progress-spinner'],global['polythene-react-base-spinner']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreMaterialDesignProgressSpinner,polytheneReactBaseSpinner) { 'use strict';

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

  const SpinnerInstance = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreMaterialDesignProgressSpinner.coreMaterialDesignProgressSpinner, {
    component: polytheneReactBaseSpinner.BaseSpinner
  }));
  const SpinnerToggle = polytheneReactBase.StateComponent(polytheneCore.Conditional);
  SpinnerToggle.displayName = "MaterialDesignProgressSpinnerToggle";
  const MaterialDesignProgressSpinner = props => polytheneReactBase.renderer(SpinnerToggle, Object.assign({}, props, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  }));
  MaterialDesignProgressSpinner.classes = classes;
  MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";

  exports.MaterialDesignProgressSpinner = MaterialDesignProgressSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-material-design-progress-spinner.js.map
