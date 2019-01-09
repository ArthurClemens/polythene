import { Component } from "react";
import { Options } from "polythene-core-menu";
import { Vnode } from "polythene-react-base";

interface Menu extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Menu {}
declare class Menu extends Component<Options> {}

export { Menu };
export as namespace Menu;
