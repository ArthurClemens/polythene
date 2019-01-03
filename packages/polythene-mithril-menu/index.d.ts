import { Component } from "mithril";
import { Options } from "polythene-core-menu";

interface Menu extends Options{}
declare namespace Menu {}
declare const Menu: Component<Options>;

export { Menu };
export as namespace Menu;
