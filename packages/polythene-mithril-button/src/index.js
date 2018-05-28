import { StateComponent } from "polythene-mithril-base";
import { coreButton as core } from "polythene-core-button";
import { Ripple } from "polythene-mithril-ripple";
import { Icon } from "polythene-mithril-icon";

export const Button = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Ripple, Icon })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Ripple, Icon }))
  }
));

Button.displayName = "Button";
