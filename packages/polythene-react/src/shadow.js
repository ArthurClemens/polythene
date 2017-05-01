import { statelessComponent } from "./core";
import { shadow as component } from "polythene-new-core";

export const shadow = statelessComponent(Object.assign({}, component));

shadow.theme = component.theme;
shadow.displayName = "shadow";
