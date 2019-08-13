import { Component } from "react";
import { Options } from "polythene-core-button";

interface ExtendedOptions extends Options {
  element?: string;
}

interface Button extends ExtendedOptions {}
declare namespace Button {}
declare class Button extends Component<ExtendedOptions> {}

export { Button };
export as namespace Button;
