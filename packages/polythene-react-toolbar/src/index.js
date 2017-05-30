import { viewComponent } from "polythene-react-base";
import { coreToolbar as core } from "polythene-core-toolbar";

export const Toolbar = viewComponent(Object.assign(
  {},
  core
));

Toolbar.theme = core.theme;
Toolbar.displayName = "Toolbar";
