import { viewComponent } from "polythene-react-base";
import { viewControl as core } from "polythene-core-selection-control";
import { Icon } from "polythene-react-icon";
import { IconButton } from "polythene-react-icon-button";

export const ViewControl = viewComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Icon, IconButton }))
  }
));

ViewControl.displayName = "ViewControl";
