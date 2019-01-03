import { Component } from "mithril";
import { Options } from "polythene-core-drawer";

interface Drawer extends Options{}
declare namespace Drawer {}
declare const Drawer: Component<Options>;

export { Drawer };
export as namespace Drawer;
