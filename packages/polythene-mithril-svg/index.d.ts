import { Component } from "mithril";
import { Options } from "polythene-core-svg";

interface SVG extends Options{}
declare namespace SVG {}
declare const SVG: Component<Options>;

export { SVG };
export as namespace SVG;
