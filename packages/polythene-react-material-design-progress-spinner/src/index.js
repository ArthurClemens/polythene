
/**
 * @typedef {import("polythene-react-base").Vnode} Vnode
 */

import { BaseSpinner } from "polythene-react-base-spinner";
import { _Spinner } from "polythene-core-material-design-progress-spinner";
import classes from "polythene-css-classes/material-design-progress-spinner";
import { cast, h, useState, useRef, useEffect } from "cyano-react";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";
import { ComponentCreator, renderer } from "polythene-react-base";
import { coreConditional } from "polythene-core";

const Spinner = cast(_Spinner, { h, useState, useRef, useEffect, BaseSpinner });

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";

/**
 * @param {Vnode} props 
 */
export const MaterialDesignProgressSpinner = props => (
  renderer(SpinnerToggle, {
    ...props,
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: Spinner
  })
);

MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";
