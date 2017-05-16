import { statelessComponent } from "polythene-mithril-base";
import { CoreShadow as component } from "polythene-core-shadow";

export const Shadow = statelessComponent(Object.assign(
  {},
  component
));

Shadow.theme = component.theme;
