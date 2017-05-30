import { viewComponent } from 'polythene-react-base';
import { coreIcon } from 'polythene-core-icon';
import { SVG } from 'polythene-react-svg';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Icon = viewComponent(_extends({}, coreIcon, {
  createProps: function createProps(vnode, args) {
    return coreIcon.createProps(vnode, _extends(args, { SVG: SVG }));
  },
  createContent: function createContent(vnode, args) {
    return coreIcon.createContent(vnode, _extends(args, { SVG: SVG }));
  }
}));

Icon.theme = coreIcon.theme;
Icon.displayName = "Icon";

export { Icon };
