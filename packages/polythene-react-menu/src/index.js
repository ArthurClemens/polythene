import { StateComponent, renderer as h } from "polythene-react-base";
import { Conditional } from "polythene-core";
import { coreMenu as core } from "polythene-core-menu";
import classes from "polythene-css-classes/menu";
import { Shadow } from "polythene-react-shadow";

const MenuInstance = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow }))
  }
));

const MenuToggle = StateComponent(Conditional);
MenuToggle.displayName = "MenuToggle";

export const Menu = props => (
  h(MenuToggle, Object.assign(
    {},
    props,
    {
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    }
  ))
);

Menu.displayName = "Menu";
