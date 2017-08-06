import { StateComponent } from "polythene-mithril-base";
import { coreRaisedButton as core } from "polythene-core-raised-button";
import { Button } from "polythene-mithril-button";
import { Shadow } from "polythene-mithril-shadow";

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
