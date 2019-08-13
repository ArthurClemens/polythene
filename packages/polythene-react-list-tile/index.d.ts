import { Component } from "react";
import { Options } from "polythene-core-list-tile";

interface ExtendedOptions extends Options {
  element?: string;
}

interface ListTile extends ExtendedOptions{}
declare namespace ListTile {}
declare class ListTile extends Component<ExtendedOptions> {}

export { ListTile };
export as namespace ListTile;
