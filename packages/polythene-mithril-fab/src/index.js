// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreFAB as core } from "polythene-core-fab";
import { Icon } from "polythene-mithril-icon";
import { Button } from "polythene-mithril-button";

export const FAB = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, Icon }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Icon }),
  component: Button,
});

FAB["displayName"] = "FAB";
