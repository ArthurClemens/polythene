import { Button } from 'polythene-react-button';
import { deprecation } from 'polythene-core';
import { ViewComponent, renderer } from 'polythene-react-base';

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
