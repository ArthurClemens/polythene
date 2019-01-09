import { Component } from "react";
import { Options } from "polythene-core-icon";
import { Vnode } from "polythene-react-base";

interface Icon extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Icon {}
declare class Icon extends Component<Options> {}

export { Icon };
export as namespace Icon;
