import { Component } from "mithril";
import { Options } from "polythene-core-fab";

interface FAB extends Options{}
declare namespace FAB {}
declare const FAB: Component<Options>;

export { FAB };
export as namespace FAB;
