import { StateComponent, renderer as h } from "polythene-react-base";
import { Conditional } from "polythene-core";
import { coreMaterialDesignProgressSpinner as core } from "polythene-core-spinner";
import { BaseSpinner } from "../base";

const SpinnerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: BaseSpinner }
));

const SpinnerToggle = StateComponent(Conditional);

export const MaterialDesignProgressSpinner = props => (
  h(SpinnerToggle, Object.assign(
    {},
    props,
    {
      placeholderClassName: BaseSpinner.classes.placeholder,
      instance: SpinnerInstance
    }
  ))
);

MaterialDesignProgressSpinner.theme = core.theme;
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";
