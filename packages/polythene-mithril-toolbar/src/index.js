import { statelessComponent } from "polythene-mithril-base";
import { CoreToolbar as component } from "polythene-core-toolbar";

export const Toolbar = statelessComponent(Object.assign(
  {},
  component
));

Toolbar.theme = component.theme;
