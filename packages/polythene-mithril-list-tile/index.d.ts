import { Component, Attributes, RouteOptions, ComponentTypes } from "mithril";
import { Options } from "polythene-core-list-tile";

/* Define RouteLinkAttrs for Mithril 1.x users */
interface RouteLinkAttrs extends Attributes {
  href: string;
  selector?: string | ComponentTypes<unknown>;
  options?: RouteOptions;
}
interface ExtendedOptions extends Options {
  element?: string | Component<RouteLinkAttrs, {}>;
}

interface ListTile extends ExtendedOptions{}
declare namespace ListTile {}
declare const ListTile: Component<ExtendedOptions>;

export { ListTile };
export as namespace ListTile;
