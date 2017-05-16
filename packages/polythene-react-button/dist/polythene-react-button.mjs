import { statefulComponent } from 'polythene-react-base';
import { CoreButton } from 'polythene-core-button';
import { Ripple } from 'polythene-react-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreButton.createProps(vnode, _extends(args, { Ripple: Ripple }));
};
var createContent = function createContent(vnode, args) {
  return CoreButton.createContent(vnode, _extends(args, { Ripple: Ripple }));
};

var Button = statefulComponent(_extends({}, CoreButton, {
  createProps: createProps,
  createContent: createContent
}));

Button.theme = CoreButton.theme;
Button.displayName = "Button";

export { Button };
