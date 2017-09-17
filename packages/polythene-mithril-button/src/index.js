import { StateComponent } from "polythene-mithril-base";
import { coreButton as core } from "polythene-core-button";
import { Ripple } from "polythene-mithril-ripple";

export const Button = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Ripple })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Ripple }))
  }
));

Button.displayName = "Button";
