import { viewComponent } from "polythene-react-base";
import { viewControl as core } from "polythene-core-switch";
import { Shadow } from "polythene-react-shadow";
import { IconButton } from "polythene-react-icon-button";

export const ViewControl = viewComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow, IconButton }))
  }
));

ViewControl.displayName = "ViewControl";
