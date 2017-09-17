import { StateComponent, renderer as h } from "polythene-react-base";
import { Conditional } from "polythene-core";
import { coreMaterialDesignSpinner as core, classes } from "polythene-core-material-design-spinner";
import { BaseSpinner } from "polythene-react-base-spinner";

const SpinnerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: BaseSpinner }
));

const SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "MaterialDesignSpinnerToggle";

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

MaterialDesignSpinner.classes = classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";
