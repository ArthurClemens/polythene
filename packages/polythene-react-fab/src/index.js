import { statefulComponent } from "polythene-react-base";
import { FAB as component } from "polythene-core-fab";
import { Icon } from "polythene-react-icon";
import { raisedButton } from "polythene-react-raised-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon }));

export const FAB = statefulComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: raisedButton
  }
));

FAB.theme = component.theme;
FAB.displayName = "Fab";
