import { Component } from "react";
import { Options } from "polythene-core-button-group";

interface ButtonGroup extends Options{}
declare namespace ButtonGroup {}
declare class ButtonGroup extends Component<Options> {}

export { ButtonGroup };
export as namespace ButtonGroup;
