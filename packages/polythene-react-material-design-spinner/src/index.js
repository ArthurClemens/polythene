// @ts-check

/**
 * @typedef {import("polythene-react-base").Vnode} Vnode
 */

import { ComponentCreator, renderer as h } from "polythene-react-base";
import { coreConditional } from "polythene-core";
import { coreMaterialDesignSpinner as core } from "polythene-core-material-design-spinner";
import classes from "polythene-css-classes/material-design-spinner";
import { BaseSpinner } from "polythene-react-base-spinner";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";

const SpinnerInstance = ComponentCreator({
  ...core,
  component: BaseSpinner
});

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignSpinnerToggle";

/**
 * @param {Vnode} props 
 */
export const MaterialDesignSpinner = props => (
  h(SpinnerToggle, {
    ...props,
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  })
);

MaterialDesignSpinner["classes"] = classes;
MaterialDesignSpinner["displayName"] = "MaterialDesignSpinner";
