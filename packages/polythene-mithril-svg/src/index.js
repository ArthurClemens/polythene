import { viewComponent } from "polythene-mithril-base";
import { CoreSVG as component } from "polythene-core-svg";

export const SVG = viewComponent(Object.assign(
  {},
  component
));

SVG.theme = component.theme;
