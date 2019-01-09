// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreIcon as core } from "polythene-core-icon";
import { SVG } from "polythene-mithril-svg";

export const Icon = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, SVG }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, SVG })
});

Icon["displayName"] = "Icon";
