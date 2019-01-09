import { Component } from "react";
import { Options } from "polythene-core-dialog-pane";
import { Vnode } from "polythene-react-base";

interface DialogPane extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace DialogPane {}
declare class DialogPane extends Component<Options> {}

export { DialogPane };
export as namespace DialogPane;
