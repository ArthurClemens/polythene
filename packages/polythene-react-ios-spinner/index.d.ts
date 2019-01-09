import { Component } from "react";
import { Options } from "polythene-core-ios-spinner";
import { Vnode } from "polythene-react-base";

interface IOSSpinner extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace IOSSpinner {}
declare class IOSSpinner extends Component<Options> {}

export { IOSSpinner };
export as namespace IOSSpinner;
