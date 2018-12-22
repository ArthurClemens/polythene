import { StateComponent, ViewComponent, renderer } from 'polythene-mithril-base';
import { coreButton, coreRaisedButton } from 'polythene-core-button';
import { Ripple } from 'polythene-mithril-ripple';
import { Icon } from 'polythene-mithril-icon';
import { Shadow } from 'polythene-mithril-shadow';

const TextButton = StateComponent(Object.assign({}, coreButton, {
  createProps: (vnode, args) => coreButton.createProps(vnode, Object.assign(args, {
    Ripple,
    Icon,
    Shadow
  })),
  createContent: (vnode, args) => coreButton.createContent(vnode, Object.assign(args, {
    Ripple,
    Icon,
    Shadow
  }))
}));
TextButton.displayName = "TextButton";

const RaisedButton = StateComponent(Object.assign({}, coreRaisedButton, {
  createProps: (vnode, args) => coreRaisedButton.createProps(vnode, Object.assign(args, {
    Shadow
  })),
  createContent: (vnode, args) => coreRaisedButton.createContent(vnode, Object.assign(args, {
    Shadow
  })),
  component: TextButton
}));
RaisedButton.displayName = "RaisedButton";

const Button = ViewComponent({
  view: vnode => renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children)
});
Button.displayName = "Button";

export { Button };
