import { statefulComponent, Toggle, renderer as h } from "polythene-react-base";
import { CoreMenu as component } from "polythene-core-menu";
import { Shadow } from "polythene-react-shadow";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Shadow }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Shadow }));

const MenuInstance = statefulComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

export const Menu = props =>
  h(Toggle, Object.assign(
    {},
    {
      placeholderClassName: component.classes.placeholder,
      instance: MenuInstance
    },
    props
  ));

Menu.theme = component.theme;
