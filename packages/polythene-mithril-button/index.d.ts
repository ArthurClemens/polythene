import { Component } from "mithril";
import { Options } from "polythene-core-button";

interface Button extends Options{}
declare namespace Button {}
declare const Button: Component<Options>;

export { Button };
export as namespace Button;
