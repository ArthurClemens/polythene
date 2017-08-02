import { StateComponent, renderer as h } from "polythene-mithril-base";
import { Conditional } from "polythene-core";
import { coreiOSSpinner as core } from "polythene-core-spinner";
import { BaseSpinner } from "../base";

const SpinnerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: BaseSpinner }
));

const SpinnerToggle = StateComponent(Conditional);

export const iOSSpinner = {
  view: vnode =>
    h(SpinnerToggle, Object.assign({},
      vnode.attrs,
      {
        placeholderClassName: BaseSpinner.classes.placeholder,
        instance: SpinnerInstance
      }
    ))
};

iOSSpinner.theme = core.theme;
iOSSpinner.classes = core.classes;
iOSSpinner.displayName = "iOSSpinner";
