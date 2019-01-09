// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreToolbar as core } from "polythene-core-toolbar";
import { Shadow } from "polythene-react-shadow";

export const Toolbar = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow })
});

Toolbar["displayName"] = "Toolbar";
