import { StateComponent } from "polythene-react-base";
import { coreButton as core } from "polythene-core-button";
import { Ripple } from "polythene-react-ripple";
import { Icon } from "polythene-react-icon";

export const TextButton = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Ripple, Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Ripple, Icon }))
  }
));

TextButton.displayName = "TextButton";
