import { ViewComponent } from 'polythene-react-base';
import { coreListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-react-icon';
import { Ripple } from 'polythene-react-ripple';

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
