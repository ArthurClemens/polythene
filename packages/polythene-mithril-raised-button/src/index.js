import { statefulComponent } from "polythene-mithril-base";
import { RaisedButton as component } from "polythene-core-raised-button";
import { button } from "polythene-mithril-button";
import { Shadow } from "polythene-mithril-shadow";

const getInitialState = args => component.getInitialState(args);
const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Shadow }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Shadow }));

export const RaisedButton = statefulComponent(Object.assign(
  {},
  component,
  {
    getInitialState,
    createProps,
    createContent,
    element: button
  }
));

RaisedButton.theme = component.theme;
