import { Component } from "react";
import { Options } from "polythene-core-icon-button";

interface IconButton extends Options{}
declare namespace IconButton {}
declare class IconButton extends Component<Options> {}

export { IconButton };
export as namespace IconButton;
