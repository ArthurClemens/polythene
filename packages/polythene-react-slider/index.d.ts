import { Component } from "react";
import { Options } from "polythene-core-slider";

interface Slider extends Options{}
declare namespace Slider {}
declare class Slider extends Component<Options> {}

export { Slider };
export as namespace Slider;
