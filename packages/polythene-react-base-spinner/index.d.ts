import { Component } from "react";
import { Options } from "polythene-core-base-spinner";
import { Vnode } from "polythene-react-base";

interface BaseSpinner extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace BaseSpinner {}
declare class BaseSpinner extends Component<Options> {}

export { BaseSpinner };
export as namespace BaseSpinner;
