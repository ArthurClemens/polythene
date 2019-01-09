import { Component } from "react";
import { Options } from "polythene-core-card";
import { Vnode } from "polythene-react-base";

interface Card extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Card {}
declare class Card extends Component<Options> {}

export { Card };
export as namespace Card;
