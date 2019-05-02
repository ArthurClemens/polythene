
/**
 * @typedef {import("mithril").Vnode} Vnode
 */

import { BaseSpinner } from "polythene-mithril-base-spinner";
import { _Spinner } from "polythene-core-material-design-spinner";
import classes from "polythene-css-classes/material-design-spinner";
import { cast, h } from "cyano-mithril";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";
import { ComponentCreator, renderer } from "polythene-mithril-base";
import { coreConditional } from "polythene-core";

const Spinner = cast(_Spinner, { h, BaseSpinner });

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignSpinnerToggle";

export const MaterialDesignSpinner = {
  /**
   * @param {Vnode} vnode
   */
  view: vnode =>
    renderer(SpinnerToggle, {
      ...vnode.attrs,
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    })
};

MaterialDesignSpinner["classes"] = classes;
MaterialDesignSpinner["displayName"] = "MaterialDesignSpinner";
