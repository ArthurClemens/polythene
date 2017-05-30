import { Toggle, renderer, stateComponent } from 'polythene-react-base';
import { classes, coreMenu } from 'polythene-core-menu';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MenuInstance = stateComponent(_extends({}, coreMenu, {
  createProps: function createProps(vnode, args) {
    return coreMenu.createProps(vnode, _extends(args, { Shadow: Shadow }));
  },
  createContent: function createContent(vnode, args) {
    return coreMenu.createContent(vnode, _extends(args, { Shadow: Shadow }));
  }
}));

var Menu = function Menu(props) {
  return renderer(Toggle, _extends({}, {
    placeholderClassName: classes.placeholder,
    instance: MenuInstance
  }, props));
};

Menu.theme = coreMenu.theme;

export { Menu };
