import { Component } from "mithril";
import { Options } from "polythene-core-material-design-spinner";

interface MaterialDesignSpinner extends Options{}
declare namespace MaterialDesignSpinner {}
declare const MaterialDesignSpinner: Component<Options, any>;

export { MaterialDesignSpinner };
export as namespace MaterialDesignSpinner;
