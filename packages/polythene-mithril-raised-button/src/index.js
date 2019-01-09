// @ts-check

import { Button } from "polythene-mithril-button";
import { deprecation } from "polythene-core";
import { ComponentCreator, renderer as h } from "polythene-mithril-base";

export const RaisedButton = ComponentCreator({
  onMount: () => {
    deprecation("RaisedButton", { newComponent: "Button", newOption: "raised: true" });
  },
  view: vnode =>
    h(Button, {
      raised: true,
      ...vnode.attrs
    }, vnode.children)
});

RaisedButton["displayName"] = "RaisedButton";
