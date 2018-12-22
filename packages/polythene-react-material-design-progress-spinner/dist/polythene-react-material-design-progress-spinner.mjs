import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { coreMaterialDesignProgressSpinner } from 'polythene-core-material-design-progress-spinner';
import { BaseSpinner } from 'polythene-react-base-spinner';

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

const SpinnerInstance = StateComponent(Object.assign({}, coreMaterialDesignProgressSpinner, {
  component: BaseSpinner
}));
const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "MaterialDesignProgressSpinnerToggle";
const MaterialDesignProgressSpinner = props => renderer(SpinnerToggle, Object.assign({}, props, {
  placeholderClassName: baseSpinnerClasses.placeholder,
  instance: SpinnerInstance
}));
MaterialDesignProgressSpinner.classes = classes;
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";

export { MaterialDesignProgressSpinner };
