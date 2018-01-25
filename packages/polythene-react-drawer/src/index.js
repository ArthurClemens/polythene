import { ViewComponent } from "polythene-react-base";
import { coreDrawer as core } from "polythene-core-drawer";
import { Menu } from "polythene-react-menu";

export const Drawer = ViewComponent(Object.assign(
  {},
  core,
  {
    component: Menu,
  }
));

Drawer.displayName = "Drawer";
