import { StateComponent, renderer as h } from "polythene-mithril-base";
import { Conditional } from "polythene-core";
import { coreIOSSpinner as core } from "polythene-core-ios-spinner";
import classes from "polythene-css-classes/ios-spinner";
import { BaseSpinner } from "polythene-mithril-base-spinner";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";

const SpinnerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: BaseSpinner }
));

const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "IOSSpinnerToggle";

export const IOSSpinner = {
  view: vnode =>
    h(SpinnerToggle, Object.assign({},
      vnode.attrs,
      {
        placeholderClassName: baseSpinnerClasses.placeholder,
        instance: SpinnerInstance
      }
    ))
};

IOSSpinner.classes = classes;
IOSSpinner.displayName = "IOSSpinner";
