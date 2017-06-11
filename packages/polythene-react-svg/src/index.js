import { ViewComponent } from "polythene-react-base";
import { coreSVG as core } from "polythene-core-svg";

export const SVG = ViewComponent(Object.assign(
  {},
  core
));

SVG.theme = core.theme;
SVG.displayName = "SVG";
