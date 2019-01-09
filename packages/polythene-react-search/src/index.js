// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreSearch as core } from "polythene-core-search";
import { TextField } from "polythene-react-textfield";

export const Search = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, TextField })
});

Search["displayName"] = "Search";
