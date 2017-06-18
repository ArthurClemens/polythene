import { ViewComponent } from "polythene-react-base";
import { coreTab as core } from "polythene-core-tabs";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";

export const Tab = ViewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    component: Button
  }
));

Tab.displayName = "Tab";
