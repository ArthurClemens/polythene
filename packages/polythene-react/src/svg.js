import { statelessComponent } from "./core";
import { svg as component } from "polythene-new-core";

export const svg = statelessComponent(Object.assign({}, component));

svg.theme = component.theme;
svg.displayName = "svg";
