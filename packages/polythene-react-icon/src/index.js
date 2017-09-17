import { ViewComponent } from "polythene-react-base";
import { coreIcon as core } from "polythene-core-icon";
import { SVG } from "polythene-react-svg";

export const Icon = ViewComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { SVG })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { SVG }))
  }
));

Icon.displayName = "Icon";
