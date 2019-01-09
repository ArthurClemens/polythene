// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreViewControl as core } from "polythene-core-switch";
import { Shadow } from "polythene-mithril-shadow";
import { IconButton } from "polythene-mithril-icon-button";

export const ViewControl = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow, IconButton }))
});

ViewControl["displayName"] = "ViewControl";
