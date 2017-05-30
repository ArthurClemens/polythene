import { viewComponent } from "polythene-mithril-base";
import { coreIconButton as core } from "polythene-core-icon-button";
import { Icon } from "polythene-mithril-icon";
import { Button } from "polythene-mithril-button";

export const IconButton = viewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon })),
    component: Button,
  }
));

IconButton.theme = core.theme;
IconButton.displayName = "IconButton";
