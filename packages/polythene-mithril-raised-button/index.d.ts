import { Component, Vnode } from "mithril";
import { Options } from "polythene-core-button";

interface RaisedButton extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace RaisedButton {}
declare const RaisedButton: Component<Options>;

export { RaisedButton };
export as namespace RaisedButton;
