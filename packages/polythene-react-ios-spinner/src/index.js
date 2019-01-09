// @ts-check

import { ComponentCreator, renderer as h } from "polythene-react-base";
import { coreConditional } from "polythene-core";
import { coreIOSSpinner as core } from "polythene-core-ios-spinner";
import classes from "polythene-css-classes/ios-spinner";
import { BaseSpinner } from "polythene-react-base-spinner";
import baseSpinnerClasses from "polythene-css-classes/base-spinner";

const SpinnerInstance = ComponentCreator({
  ...core,
  component: BaseSpinner
});

const SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "IOSSpinnerToggle";

export const IOSSpinner = props => (
  h(SpinnerToggle, {
    ...props,
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance,
  })
);

IOSSpinner["classes"] = classes;
IOSSpinner["displayName"] = "IOSSpinner";
