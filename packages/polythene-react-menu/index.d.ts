import { Component } from "react";
import { Options } from "polythene-core-menu";

interface Menu extends Options{}
declare namespace Menu {}
declare class Menu extends Component<Options> {}

export { Menu };
export as namespace Menu;
