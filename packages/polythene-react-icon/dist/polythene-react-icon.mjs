import { viewComponent } from 'polythene-react-base';
import { CoreIcon } from 'polythene-core-icon';
import { SVG } from 'polythene-react-svg';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreIcon.createProps(vnode, _extends(args, { SVG: SVG }));
};
var createContent = function createContent(vnode, args) {
  return CoreIcon.createContent(vnode, _extends(args, { SVG: SVG }));
};

var Icon = viewComponent(_extends({}, CoreIcon, {
  createProps: createProps,
  createContent: createContent
}));

Icon.theme = CoreIcon.theme;
Icon.displayName = "Icon";

export { Icon };
