import { Component } from "react";
import { Options } from "polythene-core-dialog-pane";

interface DialogPane extends Options{}
declare namespace DialogPane {}
declare class DialogPane extends Component<Options> {}

export { DialogPane };
export as namespace DialogPane;
