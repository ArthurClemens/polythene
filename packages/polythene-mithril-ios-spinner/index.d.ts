import { Component } from "mithril";
import { Options } from "polythene-core-ios-spinner";

interface IOSSpinner extends Options{}
declare namespace IOSSpinner {}
declare const IOSSpinner: Component<Options>;

export { IOSSpinner };
export as namespace IOSSpinner;
