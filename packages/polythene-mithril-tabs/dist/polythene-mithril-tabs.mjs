import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';
import { ViewComponent, StateComponent } from 'polythene-mithril-base';
import { coreTab, coreScrollButton, coreTabs } from 'polythene-core-tabs';
import { IconButton } from 'polythene-mithril-icon-button';

const Tab = ViewComponent(Object.assign({}, coreTab, {
  createProps: (vnode, args) => coreTab.createProps(vnode, Object.assign(args, {
    Icon
  })),
  component: Button
}));
Tab.displayName = "Tab";

const ScrollButton = ViewComponent(Object.assign({}, coreScrollButton, {
  component: IconButton
}));
ScrollButton.displayName = "ScrollButton";

const Tabs = StateComponent(Object.assign({}, coreTabs, {
  createContent: (vnode, args) => coreTabs.createContent(vnode, Object.assign(args, {
    Tab,
    ScrollButton
  }))
}));
Tabs.displayName = "Tabs";

export { Tabs };
