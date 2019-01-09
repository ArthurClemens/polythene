import { Component } from "react";
import { Options, onChangeTextFieldState } from "polythene-core-textfield";
import { Vnode } from "polythene-react-base";

interface TextField extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace TextField {}
declare class TextField extends Component<Options> {}

export { TextField, onChangeTextFieldState };
export as namespace TextField;
