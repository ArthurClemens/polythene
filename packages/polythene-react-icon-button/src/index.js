import { StateComponent } from "polythene-react-base";
import { coreIconButton as core } from "polythene-core-icon-button";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";

export const IconButton = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon })),
    component: Button
  }
));

IconButton.theme = core.theme;
IconButton.displayName = "IconButton";
