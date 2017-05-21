import { viewComponent } from "polythene-mithril-base";
import { CoreToolbar as component } from "polythene-core-toolbar";

export const Toolbar = viewComponent(Object.assign(
  {},
  component
));

Toolbar.theme = component.theme;
