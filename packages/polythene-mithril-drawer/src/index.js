import { StateComponent } from "polythene-mithril-base";
import { coreDrawer as core } from "polythene-core-drawer";
import { Menu } from "polythene-mithril-menu";

export const Drawer = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Menu }))
  }
));

Drawer.displayName = "Drawer";

