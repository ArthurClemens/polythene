import { ViewComponent } from "polythene-mithril-base";
import { coreFAB as core } from "polythene-core-fab";
import { Icon } from "polythene-mithril-icon";
import { RaisedButton } from "polythene-mithril-raised-button";

export const FAB = ViewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon })),
    component: RaisedButton,
  }
));

FAB.displayName = "FAB";
