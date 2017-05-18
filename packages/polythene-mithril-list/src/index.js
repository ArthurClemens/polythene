import { statelessComponent } from "polythene-mithril-base";
import { CoreList as component } from "polythene-core-list";
import { ListTile } from "polythene-mithril-list-tile";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { ListTile }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { ListTile }));

export const List = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

List.theme = component.theme;
