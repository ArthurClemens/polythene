import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { classes, coreMenu } from 'polythene-core-menu';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MenuInstance = StateComponent(_extends({}, coreMenu, {
  createContent: function createContent(vnode, args) {
    return coreMenu.createContent(vnode, _extends(args, { Shadow: Shadow }));
  }
}));

var MenuToggle = StateComponent(Conditional);
MenuToggle.displayName = "MenuToggle";

var Menu = function Menu(props) {
  return renderer(MenuToggle, _extends({}, props, {
    placeholderClassName: classes.placeholder,
    instance: MenuInstance
  }));
};

Menu.displayName = "Menu";

export { Menu };
