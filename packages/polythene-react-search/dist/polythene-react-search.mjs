import { StateComponent } from 'polythene-react-base';
import { coreSearch } from 'polythene-core-search';
import { TextField } from 'polythene-react-textfield';

const Search = StateComponent(Object.assign({}, coreSearch, {
  createContent: (vnode, args) => coreSearch.createContent(vnode, Object.assign(args, {
    TextField
  }))
}));
Search.displayName = "Search";

export { Search };
