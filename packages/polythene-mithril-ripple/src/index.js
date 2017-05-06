import { statefulComponent } from "polythene-mithril-base";
import { ripple as component } from "polythene-core-ripple";

export const ripple = statefulComponent(Object.assign(
  {},
  component
));

ripple.theme = component.theme;
