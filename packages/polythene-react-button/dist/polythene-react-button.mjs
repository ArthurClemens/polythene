import { StateComponent, ViewComponent, renderer } from 'polythene-react-base';
import { coreButton, coreRaisedButton } from 'polythene-core-button';
import { Ripple } from 'polythene-react-ripple';
import { Icon } from 'polythene-react-icon';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TextButton = StateComponent(_extends({}, coreButton, {
  createProps: function createProps(vnode, args) {
    return coreButton.createProps(vnode, _extends(args, { Ripple: Ripple, Icon: Icon }));
  },
  createContent: function createContent(vnode, args) {
    return coreButton.createContent(vnode, _extends(args, { Ripple: Ripple, Icon: Icon }));
  }
}));

TextButton.displayName = "TextButton";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RaisedButton = StateComponent(_extends$1({}, coreRaisedButton, {
  createProps: function createProps(vnode, args) {
    return coreRaisedButton.createProps(vnode, _extends$1(args, { Shadow: Shadow }));
  },
  createContent: function createContent(vnode, args) {
    return coreRaisedButton.createContent(vnode, _extends$1(args, { Shadow: Shadow }));
  },
  component: TextButton
}));

RaisedButton.displayName = "RaisedButton";

var Button = ViewComponent({
  view: function view(vnode) {
    return renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children);
  }
});

Button.displayName = "Button";

export { Button };
