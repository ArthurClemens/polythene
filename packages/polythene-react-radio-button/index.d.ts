import { Component } from "react";
import { Options } from "polythene-core-radio-button";

interface RadioButton extends Options{}
declare namespace RadioButton {}
declare class RadioButton extends Component<Options> {}

export { RadioButton };
export as namespace RadioButton;
