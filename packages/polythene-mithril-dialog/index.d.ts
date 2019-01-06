import { ClassComponent, Component } from "mithril";
import { Options, show, hide } from "polythene-core-dialog";

interface Dialog extends Options{}
declare namespace Dialog {}

declare interface Dialog extends ClassComponent {
  show: show;
  hide: hide;
}

declare const Dialog: Dialog;

export { Dialog };
export as namespace Dialog;

interface DialogInstance extends Options{}
declare namespace DialogInstance {}
declare const DialogInstance: Component<Options>;

export { DialogInstance };
export as namespace DialogInstance;
