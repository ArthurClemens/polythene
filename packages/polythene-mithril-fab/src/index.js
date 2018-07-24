import { ViewComponent } from "polythene-mithril-base";
import { coreFAB as core } from "polythene-core-fab";
import { Icon } from "polythene-mithril-icon";
import { Button } from "polythene-mithril-button";

export const FAB = ViewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon })),
    component: Button,
  }
));

FAB.displayName = "FAB";
