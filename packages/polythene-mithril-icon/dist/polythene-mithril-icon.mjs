import { statelessComponent } from 'polythene-mithril-base';
import { icon } from 'polythene-core-icon';
import { SVG } from 'polythene-mithril-svg';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return icon.createProps(vnode, _extends(args, { SVG: SVG }));
};
var createContent = function createContent(vnode, args) {
  return icon.createContent(vnode, _extends(args, { SVG: SVG }));
};

var Icon = statelessComponent(_extends({}, icon, {
  createProps: createProps,
  createContent: createContent
}));

Icon.theme = icon.theme;

export { Icon };
