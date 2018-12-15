import { StateComponent } from 'polythene-mithril-base';
import { coreSearch } from 'polythene-core-search';
import { TextField } from 'polythene-mithril-textfield';

const Search = StateComponent(Object.assign({}, coreSearch, {
  createContent: (vnode, args) => coreSearch.createContent(vnode, Object.assign(args, {
    TextField
  }))
}));
Search.displayName = "Search";

export { Search };
