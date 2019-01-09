// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreViewControl as core } from "polythene-core-switch";
import { Shadow } from "polythene-react-shadow";
import { IconButton } from "polythene-react-icon-button";

export const ViewControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow, IconButton })
});

ViewControl["displayName"] = "ViewControl";
