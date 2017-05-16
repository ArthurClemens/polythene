import { statefulComponent } from "polythene-mithril-base";
import { CoreRipple as component } from "polythene-core-ripple";

export const Ripple = statefulComponent(Object.assign(
  {},
  component
));

Ripple.theme = component.theme;
