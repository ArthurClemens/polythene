import { statefulComponent } from "polythene-mithril-base";
import { button as component } from "polythene-core-button";
import { Ripple } from "polythene-mithril-ripple";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Ripple }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Ripple }));

export const button = statefulComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent
  }
));

button.theme = component.theme;
