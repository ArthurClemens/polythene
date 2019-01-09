import { Component } from "react";
import { Options } from "polythene-core-search";
import { Vnode } from "polythene-react-base";

interface Search extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Search {}
declare class Search extends Component<Options> {}

export { Search };
export as namespace Search;
