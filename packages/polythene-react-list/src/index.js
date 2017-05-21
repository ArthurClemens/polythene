import { viewComponent } from "polythene-react-base";
import { CoreList as component } from "polythene-core-list";
import { ListTile } from "polythene-react-list-tile";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { ListTile }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { ListTile }));

export const List = viewComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

List.theme = component.theme;
List.displayName = "List";
