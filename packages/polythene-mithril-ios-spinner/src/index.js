// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 */

import { ComponentCreator, renderer as h } from "polythene-mithril-base";
import { coreConditional } from "polythene-core";
import { coreIOSSpinner as core } from "polythene-core-ios-spinner";
import classes from "polythene-css-classes/ios-spinner";
import { BaseSpinner } from "polythene-mithril-base-spinner";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";

const SpinnerInstance = ComponentCreator({
  ...core,
  component: BaseSpinner
});

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "IOSSpinnerToggle";

export const IOSSpinner = {
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

IOSSpinner["classes"] = classes;
IOSSpinner["displayName"] = "IOSSpinner";
