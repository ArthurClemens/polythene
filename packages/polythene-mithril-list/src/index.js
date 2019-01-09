// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreList as core } from "polythene-core-list";
import { ListTile } from "polythene-mithril-list-tile";

export const List = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, ListTile }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, ListTile })
});

List["displayName"] = "List";
