import { Component } from "react";
import { Options } from "polythene-core-material-design-spinner";

interface MaterialDesignSpinner extends Options{}
declare namespace MaterialDesignSpinner {}
declare class MaterialDesignSpinner extends Component<Options> {}

export { MaterialDesignSpinner };
export as namespace MaterialDesignSpinner;
