import { Component } from "mithril";
import { Options } from "polythene-core-icon";

interface Icon extends Options{}
declare namespace Icon {}
declare const Icon: Component<Options, any>;

export { Icon };
export as namespace Icon;
