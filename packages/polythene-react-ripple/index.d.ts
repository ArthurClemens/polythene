import { Component } from "react";
import { Options } from "polythene-core-ripple";

interface Ripple extends Options{}
declare namespace Ripple {}
declare class Ripple extends Component<Options> {}

export { Ripple };
export as namespace Ripple;
