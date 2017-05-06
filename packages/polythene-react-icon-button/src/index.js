import { statefulComponent } from "polythene-react-base";
import { iconButton as component } from "polythene-core-icon-button";
import { icon } from "polythene-react-icon";
import { button } from "polythene-react-button";

const createProps = (vnode, args) => component.createProps(vnode, Object.assign(args, { icon }));
const createContent = (vnode, args) => component.createContent(vnode, Object.assign(args, { icon }));

export const iconButton = statefulComponent(Object.assign(
  {},
  component,
  {
    createProps,
    createContent,
    element: button
  }
));

iconButton.theme = component.theme;
iconButton.displayName = "IconButton";
