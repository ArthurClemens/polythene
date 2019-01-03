import { Component } from "mithril";
import { Options, onChangeTextFieldState } from "polythene-core-textfield";

interface TextField extends Options{}
declare namespace TextField {}
declare const TextField: Component<Options>;

export { TextField, onChangeTextFieldState };
export as namespace TextField;
