import { statelessComponent } from "polythene-mithril-base";
import { FAB as component } from "polythene-core-fab";
import { Icon } from "polythene-mithril-icon";
import { raisedButton } from "polythene-mithril-raised-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon }));

export const FAB = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: raisedButton,
  }
));

FAB.theme = component.theme;
