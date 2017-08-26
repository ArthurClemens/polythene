import { StateComponent } from "polythene-mithril-base";
import { coreListTile as core } from "polythene-core-list-tile";
import { Icon } from "polythene-mithril-icon";
import { Ripple } from "polythene-mithril-ripple";

export const ListTile = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon, Ripple })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon, Ripple }))
  }
));

ListTile.theme = core.theme;
ListTile.displayName = "ListTile";
