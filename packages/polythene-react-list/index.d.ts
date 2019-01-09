import { Component } from "react";
import { Options } from "polythene-core-list";
import { Vnode } from "polythene-react-base";

interface List extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace List {}
declare class List extends Component<Options> {}

export { List };
export as namespace List;
