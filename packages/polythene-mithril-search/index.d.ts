import { Component } from "mithril";
import { Options } from "polythene-core-search";

interface Search extends Options{}
declare namespace Search {}
declare const Search: Component<Options>;

export { Search };
export as namespace Search;
