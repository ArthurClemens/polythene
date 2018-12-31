import { Component } from "react";
import { Options } from "polythene-core-button";

interface Button extends Options{}
declare namespace Button {}
declare class Button extends Component<Options> {}

export { Button };
export as namespace Button;
