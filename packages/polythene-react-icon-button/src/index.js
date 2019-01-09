// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreIconButton as core } from "polythene-core-icon-button";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";

export const IconButton = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, { ...args, Icon }),
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Icon }),
  component: Button
});

IconButton["displayName"] = "IconButton";
