import { statefulComponent } from "./core";
import { button as component } from "polythene-new-core";
import { ripple } from "./ripple";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, {ripple}));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, {ripple}));

export const button = statefulComponent({
  createProps,
  createContent,
  element: component.element
});

button.theme = component.theme;
button.displayName = "button";
