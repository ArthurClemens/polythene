import { StateComponent } from "polythene-react-base";
import { coreFAB as core } from "polythene-core-fab";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";

export const FAB = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon })),
    component: Button
  }
));

FAB.displayName = "FAB";
