import { stateComponent } from "polythene-react-base";
import { CoreIconButton as component } from "polythene-core-icon-button";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon }));

export const IconButton = stateComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    component: Button
  }
));

IconButton.theme = component.theme;
IconButton.displayName = "IconButton";
