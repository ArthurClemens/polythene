import { statefulComponent } from 'polythene-react-base';
import { fab } from 'polythene-core-fab';
import { icon } from 'polythene-react-icon';
import { raisedButton } from 'polythene-react-raised-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return fab.createProps(vnode, _extends(args, { icon: icon }));
};
var createContent = function createContent(vnode, args) {
  return fab.createContent(vnode, _extends(args, { icon: icon }));
};

var fab$1 = statefulComponent(_extends({}, fab, {
  createProps: createProps,
  createContent: createContent,
  element: raisedButton
}));

fab$1.theme = fab.theme;
fab$1.displayName = "Fab";

export { fab$1 as fab };
