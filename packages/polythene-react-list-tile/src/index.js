// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreListTile as core } from "polythene-core-list-tile";
import { Icon } from "polythene-react-icon";
import { Ripple } from "polythene-react-ripple";

export const ListTile = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, Icon, Ripple }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Icon, Ripple })
});

ListTile["displayName"] = "ListTile";
