import { statelessComponent } from "polythene-react-base";
import { svg as component } from "polythene-core-svg";

export const svg = statelessComponent(Object.assign({}, component));

svg.theme = component.theme;
svg.displayName = "svg";
