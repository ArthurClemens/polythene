import { Component, RouteLinkAttrs } from "mithril";
import { Options } from "polythene-core-list-tile";

interface ExtendedOptions extends Options {
  element?: string | Component<RouteLinkAttrs, {}>;
}

interface ListTile extends ExtendedOptions{}
declare namespace ListTile {}
declare const ListTile: Component<ExtendedOptions>;

export { ListTile };
export as namespace ListTile;
