import { viewComponent } from "polythene-mithril-base";
import { coreFAB as core } from "polythene-core-fab";
import { Icon } from "polythene-mithril-icon";
import { RaisedButton } from "polythene-mithril-raised-button";

export const FAB = viewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon })),
    component: RaisedButton,
  }
));

FAB.theme = core.theme;
FAB.displayName = "FAB";
