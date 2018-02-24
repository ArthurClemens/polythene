import { ViewComponent } from "polythene-mithril-base";
import { coreToolbar as core } from "polythene-core-toolbar";
import { Shadow } from "polythene-mithril-shadow";

export const Toolbar = ViewComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow }))
  }
));

Toolbar.displayName = "Toolbar";
