// @ts-check 

import { ComponentCreator } from "polythene-react-base";
import { coreTabs as core } from "polythene-core-tabs";
import { Tab } from "./tab";
import { ScrollButton } from "./scroll-button";

export const Tabs = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Tab, ScrollButton })
});

Tabs["displayName"] = "Tabs";
