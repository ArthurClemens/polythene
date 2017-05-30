import { viewComponent } from "polythene-mithril-base";
import { viewControl as core } from "polythene-core-selection-control";
import { Icon } from "polythene-mithril-icon";
import { IconButton } from "polythene-mithril-icon-button";

export const ViewControl = viewComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon, IconButton }))
  }
));

ViewControl.displayName = "ViewControl";
