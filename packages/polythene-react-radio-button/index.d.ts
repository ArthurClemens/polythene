import { Component } from "react";
import { Options } from "polythene-core-radio-button";
import { Vnode } from "polythene-react-base";

interface RadioButton extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace RadioButton {}
declare class RadioButton extends Component<Options> {}

export { RadioButton };
export as namespace RadioButton;
