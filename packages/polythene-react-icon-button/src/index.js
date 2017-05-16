import { statefulComponent } from "polythene-react-base";
import { CoreIconButton as component } from "polythene-core-icon-button";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { Icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { Icon }));

export const IconButton = statefulComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: Button
  }
));

IconButton.theme = component.theme;
IconButton.displayName = "IconButton";
