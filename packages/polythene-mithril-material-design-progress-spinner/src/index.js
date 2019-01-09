// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 */

import { ComponentCreator, renderer as h } from "polythene-mithril-base";
import { coreConditional } from "polythene-core";
import { coreMaterialDesignProgressSpinner as core } from "polythene-core-material-design-progress-spinner";
import classes from "polythene-css-classes/material-design-progress-spinner";
import { BaseSpinner } from "polythene-mithril-base-spinner";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";

const SpinnerInstance = ComponentCreator({
  ...core,
  component: BaseSpinner
});

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";

export const MaterialDesignProgressSpinner = {
  /**
   * @param {Vnode} vnode
   */
  view: vnode =>
    h(SpinnerToggle, {
      ...vnode.attrs,
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    })
};

MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";
