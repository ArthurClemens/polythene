import { stateComponent } from "polythene-mithril-base";
import { CoreRaisedButton as component } from "polythene-core-raised-button";
import { Button } from "polythene-mithril-button";
import { Shadow } from "polythene-mithril-shadow";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Shadow }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Shadow }));

export const RaisedButton = stateComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    component: Button
  }
));

RaisedButton.theme = component.theme;
