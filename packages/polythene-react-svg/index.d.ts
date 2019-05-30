import { Component } from "react";
import { Options } from "polythene-core-svg";

interface SVG extends Options{}
declare namespace SVG {}
declare class SVG extends Component<Options> {}

export { SVG };
export as namespace SVG;
