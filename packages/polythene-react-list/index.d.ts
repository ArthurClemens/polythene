import { Component } from "react";
import { Options } from "polythene-core-list";

interface List extends Options{}
declare namespace List {}
declare class List extends Component<Options> {}

export { List };
export as namespace List;
