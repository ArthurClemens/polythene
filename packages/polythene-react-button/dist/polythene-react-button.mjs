import { statefulComponent } from 'polythene-react-base';
import { Button } from 'polythene-core-button';
import { Ripple } from 'polythene-react-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return Button.createProps(vnode, _extends(args, { Ripple: Ripple }));
};
var createContent = function createContent(vnode, args) {
  return Button.createContent(vnode, _extends(args, { Ripple: Ripple }));
};

var Button$1 = statefulComponent(_extends({}, Button, {
  createProps: createProps,
  createContent: createContent
}));

Button$1.theme = Button.theme;
Button$1.displayName = "Button";

export { Button$1 as Button };
