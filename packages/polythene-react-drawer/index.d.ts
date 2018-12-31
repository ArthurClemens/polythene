import { Component } from "react";
import { Options } from "polythene-core-drawer";

interface Drawer extends Options{}
declare namespace Drawer {}
declare class Drawer extends Component<Options> {}

export { Drawer };
export as namespace Drawer;
