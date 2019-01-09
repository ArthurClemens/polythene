import { Button } from "polythene-react-button";
import { deprecation } from "polythene-core";
import { ComponentCreator, renderer as h } from "polythene-react-base";

export const RaisedButton = ComponentCreator({
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

RaisedButton["displayName"] = "RaisedButton";
