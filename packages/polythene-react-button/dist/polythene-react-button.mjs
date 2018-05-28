import { StateComponent } from 'polythene-react-base';
import { coreButton } from 'polythene-core-button';
import { Ripple } from 'polythene-react-ripple';
import { Icon } from 'polythene-react-icon';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = StateComponent(_extends({}, coreButton, {
  createProps: function createProps(vnode, args) {
    return coreButton.createProps(vnode, _extends(args, { Ripple: Ripple, Icon: Icon }));
  },
  createContent: function createContent(vnode, args) {
    return coreButton.createContent(vnode, _extends(args, { Ripple: Ripple, Icon: Icon }));
  }
}));

Button.displayName = "Button";

export { Button };
