import { Component } from "mithril";
import { Options } from "polythene-core-list-tile";

interface ListTile extends Options{}
declare namespace ListTile {}
declare const ListTile: Component<Options>;

export { ListTile };
export as namespace ListTile;
