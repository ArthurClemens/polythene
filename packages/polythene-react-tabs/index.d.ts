import { Component } from "react";
import { Options } from "polythene-core-tabs";

interface Tabs extends Options{}
declare namespace Tabs {}
declare class Tabs extends Component<Options> {}

export { Tabs };
export as namespace Tabs;
