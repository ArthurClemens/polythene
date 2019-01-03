import { Component } from "mithril";
import { Options } from "polythene-core-radio-button";

interface RadioButton extends Options{}
declare namespace RadioButton {}
declare const RadioButton: Component<Options>;

export { RadioButton };
export as namespace RadioButton;
