import { viewComponent } from "polythene-mithril-base";
import { CoreListTile as component } from "polythene-core-list-tile";
import { Icon } from "polythene-mithril-icon";
import { Ripple } from "polythene-mithril-ripple";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon, Ripple }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon, Ripple }));

export const ListTile = viewComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

ListTile.theme = component.theme;
