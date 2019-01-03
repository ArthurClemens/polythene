import { Component } from "mithril";
import { Options } from "polythene-core-ripple";

interface Ripple extends Options{}
declare namespace Ripple {}
declare const Ripple: Component<Options>;

export { Ripple };
export as namespace Ripple;
