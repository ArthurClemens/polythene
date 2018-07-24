import { StateComponent } from "polythene-react-base";
import { coreRaisedButton as core } from "polythene-core-button";
import { TextButton } from "./TextButton";
import { Shadow } from "polythene-react-shadow";

export const RaisedButton = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Shadow })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow })),
    component: TextButton
  }
));

RaisedButton.displayName = "RaisedButton";
