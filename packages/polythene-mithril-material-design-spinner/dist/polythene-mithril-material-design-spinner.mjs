import { StateComponent, renderer } from 'polythene-mithril-base';
import { Conditional } from 'polythene-core';
import { coreMaterialDesignSpinner } from 'polythene-core-material-design-spinner';
import { BaseSpinner } from 'polythene-mithril-base-spinner';

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

const SpinnerInstance = StateComponent(Object.assign({}, coreMaterialDesignSpinner, {
  component: BaseSpinner
}));
const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "MaterialDesignSpinnerToggle";
const MaterialDesignSpinner = {
  view: vnode => renderer(SpinnerToggle, Object.assign({}, vnode.attrs, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  }))
};
MaterialDesignSpinner.classes = classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";

export { MaterialDesignSpinner };
