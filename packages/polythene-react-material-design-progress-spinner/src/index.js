// @ts-check

import { ComponentCreator, renderer as h } from "polythene-react-base";
import { coreConditional } from "polythene-core";
import { coreMaterialDesignProgressSpinner as core } from "polythene-core-material-design-progress-spinner";
import classes from "polythene-css-classes/material-design-progress-spinner";
import { BaseSpinner } from "polythene-react-base-spinner";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";

const SpinnerInstance = ComponentCreator({
  ...core,
  component: BaseSpinner
});

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";

export const MaterialDesignProgressSpinner = props => (
  h(SpinnerToggle, {
    ...props,
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  })
);

MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";
