import { Component } from "react";
import { Options } from "polythene-core-fab";

interface FAB extends Options{}
declare namespace FAB {}
declare class FAB extends Component<Options> {}

export { FAB };
export as namespace FAB;
