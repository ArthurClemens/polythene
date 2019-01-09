import { Component } from "react";
import { Options } from "polythene-core-fab";
import { Vnode } from "polythene-react-base";

interface FAB extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace FAB {}
declare class FAB extends Component<Options> {}

export { FAB };
export as namespace FAB;
