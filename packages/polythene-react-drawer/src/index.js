import { StateComponent } from "polythene-react-base";
import { coreDrawer as core } from "polythene-core-drawer";
import { Menu } from "polythene-react-menu";

export const Drawer = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Menu }))
  }
));

Drawer.displayName = "Drawer";
