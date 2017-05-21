import { viewComponent } from "polythene-react-base";
import { CoreSVG as component } from "polythene-core-svg";

export const SVG = viewComponent(Object.assign(
  {},
  component
));

SVG.theme = component.theme;
SVG.displayName = "SVG";
