import { ViewComponent } from "polythene-mithril-base";
import { coreDrawer as core } from "polythene-core-drawer";
import { Menu } from "polythene-mithril-menu";

export const Drawer = ViewComponent(Object.assign(
  {},
  core,
  {
    component: Menu,
  }
));

Drawer.displayName = "Drawer";

