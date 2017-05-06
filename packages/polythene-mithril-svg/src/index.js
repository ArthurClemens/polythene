import { statelessComponent } from "polythene-mithril-base";
import { svg as component } from "polythene-core-svg";

export const svg = statelessComponent(Object.assign(
  {},
  component
));

svg.theme = component.theme;
