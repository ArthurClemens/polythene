import { ViewComponent } from 'polythene-mithril-base';
import { coreFAB } from 'polythene-core-fab';
import { Icon } from 'polythene-mithril-icon';
import { Button } from 'polythene-mithril-button';

const FAB = ViewComponent(Object.assign({}, coreFAB, {
  createProps: (vnode, args) => coreFAB.createProps(vnode, Object.assign(args, {
    Icon
  })),
  createContent: (vnode, args) => coreFAB.createContent(vnode, Object.assign(args, {
    Icon
  })),
  component: Button
}));
FAB.displayName = "FAB";

export { FAB };
