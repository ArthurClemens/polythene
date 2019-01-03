import { Component } from "mithril";
import { Options } from "polythene-core-radio-group";

interface RadioGroup extends Options{}
declare namespace RadioGroup {}
declare const RadioGroup: Component<Options>;

export { RadioGroup };
export as namespace RadioGroup;
