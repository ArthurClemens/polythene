import { ComponentCreator } from "polythene-react-base";
import { coreRaisedButton as core } from "polythene-core-button";
import { TextButton } from "./TextButton";
import { Shadow } from "polythene-react-shadow";

export const RaisedButton = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, Shadow }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow }),
  component: TextButton
});

RaisedButton["displayName"] = "RaisedButton";
