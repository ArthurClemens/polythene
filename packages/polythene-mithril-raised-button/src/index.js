import { statefulComponent } from "polythene-mithril-base";
import { raisedButton as component } from "polythene-core-raised-button";
import { button } from "polythene-mithril-button";
import { shadow } from "polythene-mithril-shadow";

const getInitialState = args => component.getInitialState(args);
const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { shadow }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { shadow }));

export const raisedButton = statefulComponent(Object.assign(
  {},
  component,
  {
    getInitialState,
    createProps,
    createContent,
    element: button
  }
));

raisedButton.theme = component.theme;
