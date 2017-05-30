import { stateComponent } from 'polythene-mithril-base';
import { coreButton } from 'polythene-core-button';
import { Ripple } from 'polythene-mithril-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = stateComponent(_extends({}, coreButton, {
  createProps: function createProps(vnode, args) {
    return coreButton.createProps(vnode, _extends(args, { Ripple: Ripple }));
  },
  createContent: function createContent(vnode, args) {
    return coreButton.createContent(vnode, _extends(args, { Ripple: Ripple }));
  }
}));

Button.theme = coreButton.theme;

export { Button };
