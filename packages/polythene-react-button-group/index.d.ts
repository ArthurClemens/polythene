import { Component } from "react";
import { Options } from "polythene-core-button-group";
import { Vnode } from "polythene-react-base";

interface ButtonGroup extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace ButtonGroup {}
declare class ButtonGroup extends Component<Options> {}

export { ButtonGroup };
export as namespace ButtonGroup;
