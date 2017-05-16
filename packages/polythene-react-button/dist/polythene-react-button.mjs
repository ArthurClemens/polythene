import { statefulComponent } from 'polythene-react-base';
import { button } from 'polythene-core-button';
import { Ripple } from 'polythene-react-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return button.createProps(vnode, _extends(args, { Ripple: Ripple }));
};
var createContent = function createContent(vnode, args) {
  return button.createContent(vnode, _extends(args, { Ripple: Ripple }));
};

var button$1 = statefulComponent(_extends({}, button, {
  createProps: createProps,
  createContent: createContent
}));

button$1.theme = button.theme;
button$1.displayName = "Button";

export { button$1 as button };
