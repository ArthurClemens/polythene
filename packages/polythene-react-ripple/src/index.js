import { statefulComponent } from "polythene-react-base";
import { CoreRipple as component } from "polythene-core-ripple";

export const Ripple = statefulComponent(Object.assign(
  {},
  component
));

Ripple.theme = component.theme;
Ripple.displayName = "Ripple";
