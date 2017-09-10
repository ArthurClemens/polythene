import { ViewComponent } from "polythene-mithril-base";
import { coreIcon as core } from "polythene-core-icon";
import { SVG } from "polythene-mithril-svg";

export const Icon = ViewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { SVG })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { SVG }))
  }
));

Icon.displayName = "Icon";
