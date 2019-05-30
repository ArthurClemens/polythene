import { Component } from "react";
import { Options } from "polythene-core-button";

interface RaisedButton extends Options{}
declare namespace RaisedButton {}
declare class RaisedButton extends Component<Options> {}

export { RaisedButton };
export as namespace RaisedButton;
