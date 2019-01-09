// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreIcon as core } from "polythene-core-icon";
import { SVG } from "polythene-react-svg";

export const Icon = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, SVG }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, SVG })
});

Icon["displayName"] = "Icon";
