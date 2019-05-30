import { Component } from "react";
import { Options } from "polythene-core-ios-spinner";

interface IOSSpinner extends Options{}
declare namespace IOSSpinner {}
declare class IOSSpinner extends Component<Options> {}

export { IOSSpinner };
export as namespace IOSSpinner;
