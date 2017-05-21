import { statefulComponent } from 'polythene-react-base';
import { CoreMenu } from 'polythene-core-menu';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getInitialState = function getInitialState(args) {
  return CoreMenu.getInitialState(args);
};
var createProps = function createProps(vnode, args) {
  return CoreMenu.createProps(vnode, _extends(args, { Shadow: Shadow }));
};
var createContent = function createContent(vnode, args) {
  return CoreMenu.createContent(vnode, _extends(args, { Shadow: Shadow }));
};

var Menu = statefulComponent(_extends({}, CoreMenu, {
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent
}));

Menu.theme = CoreMenu.theme;
Menu.displayName = "Menu";

export { Menu };
