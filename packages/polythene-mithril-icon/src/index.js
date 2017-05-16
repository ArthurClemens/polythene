import { statelessComponent } from "polythene-mithril-base";
import { CoreIcon as component } from "polythene-core-icon";
import { SVG } from "polythene-mithril-svg";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { SVG }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { SVG }));

export const Icon = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

Icon.theme = component.theme;
