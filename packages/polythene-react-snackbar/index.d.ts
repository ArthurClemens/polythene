import { Component } from "react";
import { Options, show, hide } from "polythene-core-snackbar";

interface Snackbar extends Options{}
declare namespace Snackbar {}

declare class Snackbar extends Component<Options> {
  static show: show;
  static hide: hide;
}

export { Snackbar };
export as namespace Snackbar;
