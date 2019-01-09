import { Component } from "react";
import { Options } from "polythene-core-button";
import { Vnode } from "polythene-react-base";

interface RaisedButton extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace RaisedButton {}
declare class RaisedButton extends Component<Options> {}

export { RaisedButton };
export as namespace RaisedButton;
