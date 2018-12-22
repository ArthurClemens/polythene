import { ViewComponent, StateComponent } from 'polythene-react-base';
import { coreTab, coreScrollButton, coreTabs } from 'polythene-core-tabs';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';
import { IconButton } from 'polythene-react-icon-button';

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
