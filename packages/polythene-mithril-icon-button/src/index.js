import { statelessComponent } from "polythene-mithril-base";
import { iconButton as component } from "polythene-core-icon-button";
import { icon } from "polythene-mithril-icon";
import { button } from "polythene-mithril-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { icon }));

export const iconButton = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: button,
  }
));

iconButton.theme = component.theme;
