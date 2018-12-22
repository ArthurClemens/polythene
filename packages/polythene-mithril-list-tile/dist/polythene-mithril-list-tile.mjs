import { ViewComponent } from 'polythene-mithril-base';
import { coreListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-mithril-icon';
import { Ripple } from 'polythene-mithril-ripple';

const ListTile = ViewComponent(Object.assign({}, coreListTile, {
  createProps: (vnode, args) => coreListTile.createProps(vnode, Object.assign(args, {
    Icon,
    Ripple
  })),
  createContent: (vnode, args) => coreListTile.createContent(vnode, Object.assign(args, {
    Icon,
    Ripple
  }))
}));
ListTile.displayName = "ListTile";

export { ListTile };
