import { statelessComponent } from "polythene-react-base";
import { CoreListTile as component } from "polythene-core-list-tile";
import { Icon } from "polythene-react-icon";
import { Ripple } from "polythene-react-ripple";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon, Ripple }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon, Ripple }));

export const ListTile = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

ListTile.theme = component.theme;
ListTile.displayName = "ListTile";
