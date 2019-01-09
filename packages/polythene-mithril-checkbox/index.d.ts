import { Component, Vnode } from "mithril";
import { Options } from "polythene-core-checkbox";

interface Checkbox extends Options{
  (_: Options): Vnode<Options>;
}
declare namespace Checkbox {}
declare const Checkbox: Component<Options>;

export { Checkbox };
export as namespace Checkbox;
