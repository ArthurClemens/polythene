import { Component } from "react";
import { Options } from "polythene-core-drawer";
import { Vnode } from "polythene-react-base";

interface Drawer extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Drawer {}
declare class Drawer extends Component<Options> {}

export { Drawer };
export as namespace Drawer;
