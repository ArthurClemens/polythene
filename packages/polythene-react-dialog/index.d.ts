import { Component } from "react";
import { Options, show, hide } from "polythene-core-dialog";

interface Dialog extends Options{}
declare namespace Dialog {}

declare class Dialog extends Component<Options> {
  static show: show;
  static hide: hide;
}

export { Dialog };
export as namespace Dialog;
