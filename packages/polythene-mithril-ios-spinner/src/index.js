import { StateComponent, renderer as h } from "polythene-mithril-base";
import { Conditional } from "polythene-core";
import { coreIOSSpinner as core, classes } from "polythene-core-ios-spinner";
import { BaseSpinner } from "polythene-mithril-base-spinner";

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
        placeholderClassName: BaseSpinner.classes.placeholder,
        instance: SpinnerInstance
      }
    ))
};

IOSSpinner.classes = classes;
IOSSpinner.displayName = "IOSSpinner";
