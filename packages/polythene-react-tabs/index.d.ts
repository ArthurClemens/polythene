import { Component } from "react";
import { Options } from "polythene-core-tabs";
import { Vnode } from "polythene-react-base";

interface Tabs extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Tabs {}
declare class Tabs extends Component<Options> {}

export { Tabs };
export as namespace Tabs;
