import { statelessComponent } from "polythene-mithril-base";
import { SVG as component } from "polythene-core-svg";

export const SVG = statelessComponent(Object.assign(
  {},
  component
));

SVG.theme = component.theme;
