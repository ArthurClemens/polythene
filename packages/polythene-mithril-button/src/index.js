import { StateComponent } from "polythene-mithril-base";
import { coreButton as core } from "polythene-core-button";
import { Ripple } from "polythene-mithril-ripple";
import { SVG } from "polythene-mithril-svg";

export const Button = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Ripple, SVG })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Ripple, SVG }))
  }
));

Button.displayName = "Button";
