// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreViewControl as core } from "polythene-core-selection-control";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";

export const ViewControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Icon, IconButton })
});

ViewControl["displayName"] = "ViewControl";
