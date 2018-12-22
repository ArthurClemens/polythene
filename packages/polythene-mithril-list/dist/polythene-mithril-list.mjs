import { ViewComponent } from 'polythene-mithril-base';
import { coreList } from 'polythene-core-list';
import { ListTile } from 'polythene-mithril-list-tile';

const List = ViewComponent(Object.assign({}, coreList, {
  createProps: (vnode, args) => coreList.createProps(vnode, Object.assign(args, {
    ListTile
  })),
  createContent: (vnode, args) => coreList.createContent(vnode, Object.assign(args, {
    ListTile
  }))
}));
List.displayName = "List";

export { List };
