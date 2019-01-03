import { Component } from "react";
import { Options } from "polythene-core-search";

interface Search extends Options{}
declare namespace Search {}
declare class Search extends Component<Options> {}

export { Search };
export as namespace Search;
