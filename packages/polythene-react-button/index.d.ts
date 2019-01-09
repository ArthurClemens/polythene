import { Component } from "react";
import { Options } from "polythene-core-button";
import { Vnode } from "polythene-react-base";

interface Button extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Button {}
declare class Button extends Component<Options> {}

export { Button };
export as namespace Button;
