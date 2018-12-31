import { Component } from "react";
import { Options } from "polythene-core-shadow";

interface Shadow extends Options{}
declare namespace Shadow {}
declare class Shadow extends Component<Options> {}

export { Shadow };
export as namespace Shadow;
