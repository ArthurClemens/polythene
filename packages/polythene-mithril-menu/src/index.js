import { stateComponent, Toggle, renderer as h } from "polythene-mithril-base";
import { coreMenu as core, classes } from "polythene-core-menu";
import { Shadow } from "polythene-mithril-shadow";

const MenuInstance = stateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Shadow })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow }))
  }
));

export const Menu = {
  view: vnode =>
    h(Toggle, Object.assign(
      {},
      {
        placeholderClassName: classes.placeholder,
        instance: MenuInstance
      },
      vnode.attrs
    ))
};

Menu.theme = core.theme;
Menu.displayName = "Menu";
