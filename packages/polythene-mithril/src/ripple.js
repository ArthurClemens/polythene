import { stateComponent } from "./core";
import { ripple as component } from "polythene-new-core";

export const ripple = stateComponent(Object.assign({}, component));

ripple.theme = component.theme;
