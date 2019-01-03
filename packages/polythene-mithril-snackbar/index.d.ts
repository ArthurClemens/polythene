import { ClassComponent } from "mithril";
import { Options, show, hide } from "polythene-core-snackbar";

interface Snackbar extends Options{}
declare namespace Snackbar {}

declare interface Snackbar extends ClassComponent {
  show: show;
  hide: hide;
}

declare const Snackbar: Snackbar;

export { Snackbar };
export as namespace Snackbar;
