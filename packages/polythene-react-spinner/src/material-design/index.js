import { StateComponent, renderer as h } from "polythene-react-base";
import { Conditional } from "polythene-core";
import { coreMaterialDesignSpinner as core } from "polythene-core-spinner";
import { BaseSpinner } from "../base";

const SpinnerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: BaseSpinner }
));

const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "SpinnerToggle";

export const MaterialDesignSpinner = props => (
  h(SpinnerToggle, Object.assign(
    {},
    props,
    {
      placeholderClassName: BaseSpinner.classes.placeholder,
      instance: SpinnerInstance
    }
  ))
);

MaterialDesignSpinner.classes = core.classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";
