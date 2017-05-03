import { statefulComponent } from "polythene-react-base";
import { ripple as component } from "polythene-core-ripple";

export const ripple = statefulComponent(Object.assign({}, component));

ripple.theme = component.theme;
ripple.displayName = "ripple";
