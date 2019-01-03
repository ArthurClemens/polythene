import { Component } from "mithril";
import { Options } from "polythene-core-slider";

interface Slider extends Options{}
declare namespace Slider {}
declare const Slider: Component<Options>;

export { Slider };
export as namespace Slider;
