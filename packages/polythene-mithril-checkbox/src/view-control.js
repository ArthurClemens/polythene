// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreViewControl as core } from "polythene-core-selection-control";
import { Icon } from "polythene-mithril-icon";
import { IconButton } from "polythene-mithril-icon-button";

export const ViewControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Icon, IconButton })
});

ViewControl["displayName"] = "ViewControl";
