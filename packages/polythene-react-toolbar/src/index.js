import { viewComponent } from "polythene-react-base";
import { CoreToolbar as component } from "polythene-core-toolbar";

export const Toolbar = viewComponent(Object.assign(
  {},
  component
));

Toolbar.theme = component.theme;
Toolbar.displayName = "Toolbar";
