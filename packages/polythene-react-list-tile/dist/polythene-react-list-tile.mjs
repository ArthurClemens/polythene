import { statelessComponent } from 'polythene-react-base';
import { CoreListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-react-icon';
import { Ripple } from 'polythene-react-ripple';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreListTile.createProps(vnode, _extends(args, { Icon: Icon, Ripple: Ripple }));
};
var createContent = function createContent(vnode, args) {
  return CoreListTile.createContent(vnode, _extends(args, { Icon: Icon, Ripple: Ripple }));
};

var ListTile = statelessComponent(_extends({}, CoreListTile, {
  createProps: createProps,
  createContent: createContent
}));

ListTile.theme = CoreListTile.theme;
ListTile.displayName = "ListTile";

export { ListTile };
