// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreBaseSpinner as core } from "polythene-core-base-spinner";
import classes from "polythene-css-classes/base-spinner";
import { Shadow } from "polythene-react-shadow";

export const BaseSpinner = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow }),
});

BaseSpinner["classes"] = classes;
BaseSpinner["displayName"] = "BaseSpinner";
