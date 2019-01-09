// @ts-check

import { ComponentCreator } from "polythene-mithril-base";
import { coreTabs as core } from "polythene-core-tabs";
import { Tab } from "./tab";
import { ScrollButton } from "./scroll-button";

export const Tabs = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Tab, ScrollButton }))
});

Tabs["displayName"] = "Tabs";
