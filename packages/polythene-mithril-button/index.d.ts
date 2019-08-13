import { Component, RouteLinkAttrs } from "mithril";
import { Options } from "polythene-core-button";

interface ExtendedOptions extends Options {
  element?: string | Component<RouteLinkAttrs, {}>;
}

interface Button extends ExtendedOptions {}
declare namespace Button {}
declare const Button: Component<ExtendedOptions>;

export { Button };
export as namespace Button;
