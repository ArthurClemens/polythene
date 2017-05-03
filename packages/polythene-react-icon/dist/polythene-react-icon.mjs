import { statefulComponent } from 'polythene-react-base';
import { icon } from 'polythene-core-icon';
import { svg } from 'polythene-react-svg';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return icon.createProps(vnode, _extends(args, { svg: svg }));
};
var createContent = function createContent(vnode, args) {
  return icon.createContent(vnode, _extends(args, { svg: svg }));
};

var icon$1 = statefulComponent({
  createProps: createProps,
  createContent: createContent,
  element: icon.element
});

icon$1.theme = icon.theme;
icon$1.displayName = "icon";

export { icon$1 as icon };
