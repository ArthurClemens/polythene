import { Component, Attributes, RouteOptions, ComponentTypes } from "mithril";
import { Options } from "polythene-core-button";

/* Define RouteLinkAttrs for Mithril 1.x users */
interface RouteLinkAttrs extends Attributes {
  href: string;
  selector?: string | ComponentTypes<unknown>;
  options?: RouteOptions;
}

interface ExtendedOptions extends Options {
  element?: string | Component<RouteLinkAttrs, {}>;
}

interface Button extends ExtendedOptions {}
declare namespace Button {}
declare const Button: Component<ExtendedOptions>;

export { Button };
export as namespace Button;
