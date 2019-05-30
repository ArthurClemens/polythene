import { Component } from "react";
import { Options } from "polythene-core-base-spinner";

interface BaseSpinner extends Options{}
declare namespace BaseSpinner {}
declare class BaseSpinner extends Component<Options> {}

export { BaseSpinner };
export as namespace BaseSpinner;
