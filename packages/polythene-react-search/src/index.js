import { StateComponent } from "polythene-react-base";
import { coreSearch as core } from "polythene-core-search";
import { TextField } from "polythene-react-textfield";

export const Search = StateComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { TextField }))
  }
));

Search.displayName = "Search";
