import { StateComponent, renderer as h } from "polythene-mithril-base";
import { Conditional } from "polythene-core";
import { coreIOSSpinner as core } from "polythene-core-spinner";
import { BaseSpinner } from "../base";

const SpinnerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: BaseSpinner }
));

const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "SpinnerToggle";

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

IOSSpinner.theme = core.theme;
IOSSpinner.classes = core.classes;
IOSSpinner.displayName = "IOSSpinner";
