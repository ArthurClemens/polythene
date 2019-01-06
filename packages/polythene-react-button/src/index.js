// @ts-check

import { ViewComponent, renderer as h } from "polythene-react-base";
import { TextButton } from "./TextButton";
import { RaisedButton } from "./RaisedButton";

export const Button = ViewComponent({
  view: vnode =>
    h(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children)
});

Button["displayName"] = "Button";
