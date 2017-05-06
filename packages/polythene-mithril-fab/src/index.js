import { statelessComponent } from "polythene-mithril-base";
import { fab as component } from "polythene-core-fab";
import { icon } from "polythene-mithril-icon";
import { raisedButton } from "polythene-mithril-raised-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { icon }));

export const fab = statelessComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: raisedButton,
  }
));

fab.theme = component.theme;
