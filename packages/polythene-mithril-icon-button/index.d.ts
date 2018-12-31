import { Component } from "mithril";
import { Options } from "polythene-core-icon-button";

interface IconButton extends Options{}
declare namespace IconButton {}
declare const IconButton: Component<Options, any>;

export { IconButton };
export as namespace IconButton;
