import { stateComponent } from 'polythene-react-base';
import { CoreFAB } from 'polythene-core-fab';
import { Icon } from 'polythene-react-icon';
import { RaisedButton } from 'polythene-react-raised-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps = function createProps(vnode, args) {
  return CoreFAB.createProps(vnode, _extends(args, { Icon: Icon }));
};
var createContent = function createContent(vnode, args) {
  return CoreFAB.createContent(vnode, _extends(args, { Icon: Icon }));
};

var FAB = stateComponent(_extends({}, CoreFAB, {
  createProps: createProps,
  createContent: createContent,
  component: RaisedButton
}));

FAB.theme = CoreFAB.theme;
FAB.displayName = "FAB";

export { FAB };
