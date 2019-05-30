
import { BaseSpinner } from "polythene-mithril-base-spinner";
import { _Spinner } from "polythene-core-material-design-progress-spinner";
import classes from "polythene-css-classes/material-design-progress-spinner";
import { cast, h, useState, useRef, useEffect } from "cyano-mithril";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";
import { _Conditional } from "polythene-core";

const Spinner = cast(_Spinner, { h, useState, useRef, useEffect, BaseSpinner });
const SpinnerToggle = cast(_Conditional, { h, useState, useEffect });
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";

export const MaterialDesignProgressSpinner = {
  view: vnode =>
    h(SpinnerToggle, {
      ...vnode.attrs,
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    })
};

MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";
