import { Component } from "react";
import { Options } from "polythene-core-shadow";
import { Vnode } from "polythene-react-base";

interface Shadow extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Shadow {}
declare class Shadow extends Component<Options> {}

export { Shadow };
export as namespace Shadow;
