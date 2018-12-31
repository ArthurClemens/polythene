import { Component } from "mithril";
import { Options } from "polythene-core-switch";

interface Switch extends Options{}
declare namespace Switch {}
declare const Switch: Component<Options, any>;

export { Switch };
export as namespace Switch;
