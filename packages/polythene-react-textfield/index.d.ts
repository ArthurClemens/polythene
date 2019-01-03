import { Component } from "react";
import { Options, onChangeTextFieldState } from "polythene-core-textfield";

interface TextField extends Options{}
declare namespace TextField {}
declare class TextField extends Component<Options> {}

export { TextField, onChangeTextFieldState };
export as namespace TextField;
