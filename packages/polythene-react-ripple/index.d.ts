import { Component } from "react";
import { Options } from "polythene-core-ripple";
import { Vnode } from "polythene-react-base";

interface Ripple extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Ripple {}
declare class Ripple extends Component<Options> {}

export { Ripple };
export as namespace Ripple;
