import { ViewComponent } from "polythene-mithril-base";
import { coreListTile as core } from "polythene-core-list-tile";
import { Icon } from "polythene-mithril-icon";
import { Ripple } from "polythene-mithril-ripple";

export const ListTile = ViewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon, Ripple })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon, Ripple }))
  }
));

ListTile.displayName = "ListTile";
