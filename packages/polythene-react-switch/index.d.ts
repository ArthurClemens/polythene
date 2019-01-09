import { Component } from "react";
import { Options } from "polythene-core-switch";
import { Vnode } from "polythene-react-base";

interface Switch extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Switch {}
declare class Switch extends Component<Options> {}

export { Switch };
export as namespace Switch;
