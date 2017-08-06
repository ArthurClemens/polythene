import { StateComponent } from "polythene-react-base";
import { coreRaisedButton as core } from "polythene-core-raised-button";
import { Button } from "polythene-react-button";
import { Shadow } from "polythene-react-shadow";

export const RaisedButton = StateComponent(Object.assign(
  {},
  core,
  {
    createProps: (vnode, args) => core.createProps(vnode, Object.assign(args, { Shadow })),
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Shadow })),
    component: Button
  }
));

RaisedButton.theme = core.theme;
RaisedButton.displayName = "RaisedButton";
