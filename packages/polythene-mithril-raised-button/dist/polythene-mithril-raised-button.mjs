import { Button } from 'polythene-mithril-button';
import { deprecation } from 'polythene-core';
import { ViewComponent, renderer } from 'polythene-mithril-base';

const RaisedButton = ViewComponent({
  onMount: () => {
    deprecation("RaisedButton", {
      newComponent: "Button",
      newOption: "raised: true"
    });
  },
  view: vnode => renderer(Button, Object.assign({}, {
    raised: true
  }, vnode.attrs), vnode.children)
});
RaisedButton.displayName = "RaisedButton";

export { RaisedButton };
