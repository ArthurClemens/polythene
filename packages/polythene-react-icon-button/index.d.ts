import { Component } from "react";
import { Options } from "polythene-core-icon-button";
import { Vnode } from "polythene-react-base";

interface IconButton extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace IconButton {}
declare class IconButton extends Component<Options> {}

export { IconButton };
export as namespace IconButton;
