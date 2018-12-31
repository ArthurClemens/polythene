import { ClassComponent } from "mithril";
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
