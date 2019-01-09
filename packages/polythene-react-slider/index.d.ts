import { Component } from "react";
import { Options } from "polythene-core-slider";
import { Vnode } from "polythene-react-base";

interface Slider extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Slider {}
declare class Slider extends Component<Options> {}

export { Slider };
export as namespace Slider;
