import { Component } from "react";
import { Options } from "polythene-core-radio-group";
import { Vnode } from "polythene-react-base";

interface RadioGroup extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace RadioGroup {}
declare class RadioGroup extends Component<Options> {}

export { RadioGroup };
export as namespace RadioGroup;
