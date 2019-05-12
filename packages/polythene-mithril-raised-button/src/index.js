
import { Button } from "polythene-mithril-button";
import { h } from "cyano-mithril";

export const RaisedButton = {
  view: vnode =>
    h(Button, {
      raised: true,
      ...vnode.attrs
    }, vnode.children)
};

RaisedButton["displayName"] = "RaisedButton";
