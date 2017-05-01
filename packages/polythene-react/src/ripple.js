import { statefulComponent } from "./core";
import { ripple as component } from "polythene-new-core";

export const ripple = statefulComponent(Object.assign({}, component));

ripple.theme = component.theme;
ripple.displayName = "ripple";
