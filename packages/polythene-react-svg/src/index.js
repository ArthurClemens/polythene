import { viewComponent } from "polythene-react-base";
import { coreSVG as core } from "polythene-core-svg";

export const SVG = viewComponent(Object.assign(
  {},
  core
));

SVG.theme = core.theme;
SVG.displayName = "SVG";
