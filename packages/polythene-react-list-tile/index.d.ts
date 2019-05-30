import { Component } from "react";
import { Options } from "polythene-core-list-tile";

interface ListTile extends Options{}
declare namespace ListTile {}
declare class ListTile extends Component<Options> {}

export { ListTile };
export as namespace ListTile;
