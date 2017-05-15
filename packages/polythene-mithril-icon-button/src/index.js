import { statelessComponent } from "polythene-mithril-base";
import { IconButton as component } from "polythene-core-icon-button";
import { Icon } from "polythene-mithril-icon";
import { button } from "polythene-mithril-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon }));

export const IconButton = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: button,
  }
));

IconButton.theme = component.theme;
