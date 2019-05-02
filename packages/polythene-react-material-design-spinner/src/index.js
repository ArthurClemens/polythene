
/**
 * @typedef {import("polythene-react-base").Vnode} Vnode
 */

import { BaseSpinner } from "polythene-react-base-spinner";
import { _Spinner } from "polythene-core-material-design-spinner";
import classes from "polythene-css-classes/material-design-spinner";
import { cast, h } from "cyano-react";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";
import { ComponentCreator, renderer } from "polythene-react-base";
import { coreConditional } from "polythene-core";

const Spinner = cast(_Spinner, { h, BaseSpinner });

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignSpinnerToggle";

/**
 * @param {Vnode} props 
 */
export const MaterialDesignSpinner = props => (
  renderer(SpinnerToggle, {
    ...props,
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: Spinner
  })
);

MaterialDesignSpinner["classes"] = classes;
MaterialDesignSpinner["displayName"] = "MaterialDesignSpinner";
