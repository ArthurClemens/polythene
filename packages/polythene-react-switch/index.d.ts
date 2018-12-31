import { Component } from "react";
import { Options } from "polythene-core-switch";

interface Switch extends Options{}
declare namespace Switch {}
declare class Switch extends Component<Options> {}

export { Switch };
export as namespace Switch;
