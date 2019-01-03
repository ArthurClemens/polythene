import { Component } from "mithril";
import { Options } from "polythene-core-button-group";

interface ButtonGroup extends Options{}
declare namespace ButtonGroup {}
declare const ButtonGroup: Component<Options>;

export { ButtonGroup };
export as namespace ButtonGroup;
