import { ClassComponent, Component, Vnode } from "mithril";
import { renderer } from "polythene-mithril-base";
import { Options, show, hide, createPane } from "polythene-core-dialog";
import { DialogPane } from "polythene-mithril-dialog-pane";

interface Dialog extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Dialog {}

declare interface Dialog extends ClassComponent {
  show: show;
  hide: hide;
  createPane: (vnode: Vnode, { renderer, Pane } : { renderer: renderer, Pane: DialogPane }) => Component<Options>;
}

declare const Dialog: Dialog;

export { Dialog };
export as namespace Dialog;

interface DialogInstance extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace DialogInstance {}
declare const DialogInstance: Component<Options>;

export { DialogInstance };
export as namespace DialogInstance;
