import { Component } from "react";
import { Options } from "polythene-core-svg";
import { Vnode } from "polythene-react-base";

interface SVG extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace SVG {}
declare class SVG extends Component<Options> {}

export { SVG };
export as namespace SVG;
