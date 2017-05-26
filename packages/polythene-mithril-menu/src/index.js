import { stateComponent, Toggle, renderer as h } from "polythene-mithril-base";
import { CoreMenu as component } from "polythene-core-menu";
import { Shadow } from "polythene-mithril-shadow";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Shadow }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Shadow }));

const MenuInstance = stateComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

export const Menu = {
  view: vnode =>
    h(Toggle, Object.assign(
      {},
      {
        placeholderClassName: component.classes.placeholder,
        instance: MenuInstance
      },
      vnode.attrs
    ))
};

Menu.theme = component.theme;
