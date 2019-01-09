// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreButton as core } from "polythene-core-button";
import { Ripple } from "polythene-mithril-ripple";
import { Icon } from "polythene-mithril-icon";
import { Shadow } from "polythene-mithril-shadow";

export const TextButton = ComponentCreator({
  ...core,
  createProps: (vnode, args) => core.createProps(vnode, {...args, Ripple, Icon, Shadow }),
  createContent: (vnode, args) => core.createContent(vnode, {...args, Ripple, Icon, Shadow })
});

TextButton["displayName"] = "TextButton";
