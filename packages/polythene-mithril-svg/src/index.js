import { viewComponent } from "polythene-mithril-base";
import { coreSVG as core } from "polythene-core-svg";

export const SVG = viewComponent(Object.assign(
  {},
  core
));

SVG.theme = core.theme;
SVG.displayName = "SVG";
