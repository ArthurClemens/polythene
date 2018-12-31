import { Component } from "react";
import { Options } from "polythene-core-icon";

interface Icon extends Options{}
declare namespace Icon {}
declare class Icon extends Component<Options> {}

export { Icon };
export as namespace Icon;
