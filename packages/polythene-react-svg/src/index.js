import { ViewComponent } from "polythene-react-base";
import { coreSVG as core } from "polythene-core-svg";
import loadjs from "loadjs";
import { buildSettings } from "polythene-theme";

export const SVG = ViewComponent(Object.assign(
  {},
  core
));

SVG.displayName = "SVG";

if (buildSettings.css === "js") {
  loadjs("polythene-theme-svg");
}
