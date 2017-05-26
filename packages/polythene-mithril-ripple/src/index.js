import { stateComponent } from "polythene-mithril-base";
import { CoreRipple as component } from "polythene-core-ripple";

export const Ripple = stateComponent(Object.assign(
  {},
  component
));

Ripple.theme = component.theme;
