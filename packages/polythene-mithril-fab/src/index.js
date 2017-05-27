import { viewComponent } from "polythene-mithril-base";
import { CoreFAB as component } from "polythene-core-fab";
import { Icon } from "polythene-mithril-icon";
import { RaisedButton } from "polythene-mithril-raised-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon }));

export const FAB = viewComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    component: RaisedButton,
  }
));

FAB.theme = component.theme;
