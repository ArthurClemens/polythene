import { Component } from "react";
import { Options } from "polythene-core-material-design-spinner";
import { Vnode } from "polythene-react-base";

interface MaterialDesignSpinner extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace MaterialDesignSpinner {}
declare class MaterialDesignSpinner extends Component<Options> {}

export { MaterialDesignSpinner };
export as namespace MaterialDesignSpinner;
