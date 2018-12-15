(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core'), require('polythene-core-material-design-spinner'), require('polythene-mithril-base-spinner')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core', 'polythene-core-material-design-spinner', 'polythene-mithril-base-spinner'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core'],global['polythene-core-material-design-spinner'],global['polythene-mithril-base-spinner']));
}(this, (function (exports,polytheneMithrilBase,polytheneCore,polytheneCoreMaterialDesignSpinner,polytheneMithrilBaseSpinner) { 'use strict';

  var classes = {
    component: "pe-md-spinner",
    // elements
    animation: "pe-md-spinner__animation",
    circle: "pe-md-spinner__circle",
    circleClipper: "pe-md-spinner__circle-clipper",
    circleClipperLeft: "pe-md-spinner__circle-clipper-left",
    circleClipperRight: "pe-md-spinner__circle-clipper-right",
    gapPatch: "pe-md-spinner__gap-patch",
    layer: "pe-md-spinner__layer",
    layerN: "pe-md-spinner__layer-"
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

  const SpinnerInstance = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreMaterialDesignSpinner.coreMaterialDesignSpinner, {
    component: polytheneMithrilBaseSpinner.BaseSpinner
  }));
  const SpinnerToggle = polytheneMithrilBase.StateComponent(polytheneCore.Conditional);
  SpinnerToggle.displayName = "MaterialDesignSpinnerToggle";
  const MaterialDesignSpinner = {
    view: vnode => polytheneMithrilBase.renderer(SpinnerToggle, Object.assign({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }))
  };
  MaterialDesignSpinner.classes = classes;
  MaterialDesignSpinner.displayName = "MaterialDesignSpinner";

  exports.MaterialDesignSpinner = MaterialDesignSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-material-design-spinner.js.map
