// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreListTile as core } from "polythene-core-list-tile";
import { Icon } from "polythene-mithril-icon";
import { Ripple } from "polythene-mithril-ripple";

export const ListTile = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, Icon, Ripple }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Icon, Ripple })
});

ListTile["displayName"] = "ListTile";
