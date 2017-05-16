import { statelessComponent } from "polythene-react-base";
import { CoreToolbar as component } from "polythene-core-toolbar";

export const Toolbar = statelessComponent(Object.assign(
  {},
  component
));

Toolbar.theme = component.theme;
Toolbar.displayName = "Toolbar";
