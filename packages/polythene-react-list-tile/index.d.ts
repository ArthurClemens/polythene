import { Component } from "react";
import { Options } from "polythene-core-list-tile";
import { Vnode } from "polythene-react-base";

interface ListTile extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace ListTile {}
declare class ListTile extends Component<Options> {}

export { ListTile };
export as namespace ListTile;
