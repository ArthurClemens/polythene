
import { BaseSpinner } from "polythene-mithril-base-spinner";
import { _Spinner } from "polythene-core-ios-spinner";
import classes from "polythene-css-classes/ios-spinner";
import { cast, h, useState, useEffect } from "cyano-mithril";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";
import { _Conditional } from "polythene-core";

const Spinner = cast(_Spinner, { h, BaseSpinner });
const SpinnerToggle = cast(_Conditional, { h, useState, useEffect });
SpinnerToggle["displayName"] = "IOSSpinnerToggle";

export const IOSSpinner = {
  view: vnode =>
    h(SpinnerToggle, {
      ...vnode.attrs,
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    })
};

IOSSpinner["classes"] = classes;
IOSSpinner["displayName"] = "IOSSpinner";
