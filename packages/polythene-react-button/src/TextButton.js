import { StateComponent } from "polythene-react-base";
import { coreButton as core } from "polythene-core-button";
import { Ripple } from "polythene-react-ripple";
import { Icon } from "polythene-react-icon";
import { Shadow } from "polythene-react-shadow";

export const TextButton = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Ripple, Icon, Shadow })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Ripple, Icon, Shadow }))
  }
));

TextButton.displayName = "TextButton";
