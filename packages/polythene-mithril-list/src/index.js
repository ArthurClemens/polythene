import { ViewComponent } from "polythene-mithril-base";
import { coreList as core } from "polythene-core-list";
import { ListTile } from "polythene-mithril-list-tile";

export const List = ViewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { ListTile })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { ListTile }))
  }
));

List.theme = core.theme;
List.displayName = "List";
