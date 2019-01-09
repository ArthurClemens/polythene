// @ts-check 

import { ComponentCreator } from "polythene-react-base";
import { coreTab as core } from "polythene-core-tabs";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";

export const Tab = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, Icon }),
  component: Button
});

Tab["displayName"] = "Tab";
