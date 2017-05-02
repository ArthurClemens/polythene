import { statefulComponent } from "./core";
import { icon as component } from "polythene-new-core";
import { svg } from "./svg";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { svg }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { svg }));

export const icon = statefulComponent({
  createProps,
  createContent,
  element: component.element
});

icon.theme = component.theme;
icon.displayName = "icon";
