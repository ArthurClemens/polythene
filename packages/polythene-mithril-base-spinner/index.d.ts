import { Component, Vnode } from "mithril";
import { Options } from "polythene-core-base-spinner";

interface BaseSpinner extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace BaseSpinner {}
declare const BaseSpinner: Component<Options>;

export { BaseSpinner };
export as namespace BaseSpinner;
