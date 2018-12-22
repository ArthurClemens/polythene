import { StateComponent, renderer } from 'polythene-mithril-base';
import { Conditional } from 'polythene-core';
import { coreIOSSpinner } from 'polythene-core-ios-spinner';
import { BaseSpinner } from 'polythene-mithril-base-spinner';

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

const SpinnerInstance = StateComponent(Object.assign({}, coreIOSSpinner, {
  component: BaseSpinner
}));
const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "IOSSpinnerToggle";
const IOSSpinner = {
  view: vnode => renderer(SpinnerToggle, Object.assign({}, vnode.attrs, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  }))
};
IOSSpinner.classes = classes;
IOSSpinner.displayName = "IOSSpinner";

export { IOSSpinner };
