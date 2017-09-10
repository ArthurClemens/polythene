import { StateComponent } from "polythene-mithril-base";
import { coreSearch as core } from "polythene-core-search";
import { TextField } from "polythene-mithril-textfield";

export const Search = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { TextField }))
  }
));

Search.displayName = "Search";
