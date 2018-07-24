import { Button } from "polythene-mithril-button";
import { deprecation } from "polythene-core";
import { ViewComponent, renderer as h } from "polythene-mithril-base";

export const RaisedButton = ViewComponent({
  onMount: () => {
    deprecation("RaisedButton", { newComponent: "Button", newOption: "raised: true" });
  },
  view: vnode =>
    h(Button, Object.assign(
      {},
      { raised: true },
      vnode.attrs
    ), vnode.children)
});

RaisedButton.displayName = "RaisedButton";
