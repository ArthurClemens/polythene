import { Conditional, renderer, statefulComponent } from 'polythene-react-base';
import { CoreMenu } from 'polythene-core-menu';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreMenu.createProps(vnode, _extends(args, { Shadow: Shadow }));
};
var createContent = function createContent(vnode, args) {
  return CoreMenu.createContent(vnode, _extends(args, { Shadow: Shadow }));
};

var MenuInstance = statefulComponent(_extends({}, CoreMenu, {
  createProps: createProps,
  createContent: createContent
}));

var Menu = function Menu(props) {
  return renderer(Conditional, _extends({}, {
    placeholderClassName: CoreMenu.classes.placeholder,
    instance: MenuInstance
  }, props));
};

Menu.theme = CoreMenu.theme;

export { Menu };
