import { Component } from "mithril";
import { Options } from "polythene-core-tabs";

interface Tabs extends Options{}
declare namespace Tabs {}
declare const Tabs: Component<Options>;

export { Tabs };
export as namespace Tabs;
