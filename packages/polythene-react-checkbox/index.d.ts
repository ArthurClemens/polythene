import { Component } from "react";
import { Options } from "polythene-core-checkbox";

interface Checkbox extends Options{}
declare namespace Checkbox {}
declare class Checkbox extends Component<Options> {}

export { Checkbox };
export as namespace Checkbox;
