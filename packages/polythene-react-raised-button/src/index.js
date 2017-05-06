import { statefulComponent } from "polythene-react-base";
import { raisedButton as component } from "polythene-core-raised-button";
import { button } from "polythene-react-button";
import { shadow } from "polythene-react-shadow";

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
raisedButton.displayName = "RaisedButton";
