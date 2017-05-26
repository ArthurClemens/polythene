import { stateComponent } from "polythene-react-base";
import { CoreRaisedButton as component } from "polythene-core-raised-button";
import { Button } from "polythene-react-button";
import { Shadow } from "polythene-react-shadow";

const getInitialState = args => component.getInitialState(args);
const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Shadow }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Shadow }));

export const RaisedButton = stateComponent(Object.assign(
  {},
  component,
  {
    getInitialState,
    createProps,
    createContent,
    element: Button
  }
));

RaisedButton.theme = component.theme;
RaisedButton.displayName = "RaisedButton";
