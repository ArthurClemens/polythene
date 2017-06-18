import { StateComponent } from "polythene-mithril-base";
import { coreTabs as core } from "polythene-core-tabs";
import { Tab } from "./tab";
import { ScrollButton } from "./scroll-button";

export const Tabs = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { Tab, ScrollButton }))
  }
));

Tabs.theme = core.theme;
Tabs.displayName = "Tabs";
