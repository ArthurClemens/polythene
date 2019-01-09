import { Component } from "react";
import { Options } from "polythene-core-material-design-progress-spinner";
import { Vnode } from "polythene-react-base";

interface MaterialDesignProgressSpinner extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace MaterialDesignProgressSpinner {}
declare class MaterialDesignProgressSpinner extends Component<Options> {}

export { MaterialDesignProgressSpinner };
export as namespace MaterialDesignProgressSpinner;
