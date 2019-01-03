import { Component } from "mithril";
import { Options } from "polythene-core-shadow";

interface Shadow extends Options{}
declare namespace Shadow {}
declare const Shadow: Component<Options>;

export { Shadow };
export as namespace Shadow;
