import { stateComponent, Toggle, renderer as h } from "polythene-react-base";
import { coreMenu as core, classes } from "polythene-core-menu";
import { Shadow } from "polythene-react-shadow";

const MenuInstance = stateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Shadow })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow }))
  }
));

export const Menu = props =>
  h(Toggle(MenuInstance, Object.assign(
    {},
    {
      placeholderClassName: classes.placeholder,
      show: props.show,
      attrs: props
    }
  )));

Menu.theme = core.theme;
Menu.displayName = "Menu";
