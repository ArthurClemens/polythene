import { Component } from "react";
import { Options } from "polythene-core-checkbox";
import { Vnode } from "polythene-react-base";

interface Checkbox extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Checkbox {}
declare class Checkbox extends Component<Options> {}

export { Checkbox };
export as namespace Checkbox;
