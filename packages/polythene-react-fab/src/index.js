import { stateComponent } from "polythene-react-base";
import { coreFAB as core } from "polythene-core-fab";
import { Icon } from "polythene-react-icon";
import { RaisedButton } from "polythene-react-raised-button";

export const FAB = stateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon })),
    component: RaisedButton
  }
));

FAB.theme = core.theme;
FAB.displayName = "FAB";
