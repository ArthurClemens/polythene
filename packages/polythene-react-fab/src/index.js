import { statefulComponent } from "polythene-react-base";
import { fab as component } from "polythene-core-fab";
import { icon } from "polythene-react-icon";
import { raisedButton } from "polythene-react-raised-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { icon }));

export const fab = statefulComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: raisedButton
  }
));

fab.theme = component.theme;
fab.displayName = "Fab";
