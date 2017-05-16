import { statefulComponent } from 'polythene-react-base';
import { FAB } from 'polythene-core-fab';
import { Icon } from 'polythene-react-icon';
import { RaisedButton } from 'polythene-react-raised-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return FAB.createProps(vnode, _extends(args, { Icon: Icon }));
};
var createContent = function createContent(vnode, args) {
  return FAB.createContent(vnode, _extends(args, { Icon: Icon }));
};

var FAB$1 = statefulComponent(_extends({}, FAB, {
  createProps: createProps,
  createContent: createContent,
  element: RaisedButton
}));

FAB$1.theme = FAB.theme;
FAB$1.displayName = "Fab";

export { FAB$1 as FAB };
