import { Component } from "mithril";
import { Options } from "polythene-core-dialog-pane";

interface DialogPane extends Options{}
declare namespace DialogPane {}
declare const DialogPane: Component<Options>;

export { DialogPane };
export as namespace DialogPane;
