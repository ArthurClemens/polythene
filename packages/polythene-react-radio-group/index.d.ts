import { Component } from "react";
import { Options } from "polythene-core-radio-group";

interface RadioGroup extends Options{}
declare namespace RadioGroup {}
declare class RadioGroup extends Component<Options> {}

export { RadioGroup };
export as namespace RadioGroup;
