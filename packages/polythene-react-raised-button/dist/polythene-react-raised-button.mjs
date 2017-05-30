import { stateComponent } from 'polythene-react-base';
import { coreRaisedButton } from 'polythene-core-raised-button';
import { Button } from 'polythene-react-button';
import { Shadow } from 'polythene-react-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RaisedButton = stateComponent(_extends({}, coreRaisedButton, {
  createProps: function createProps(vnode, args) {
    return coreRaisedButton.createProps(vnode, _extends(args, { Shadow: Shadow }));
  },
  createContent: function createContent(vnode, args) {
    return coreRaisedButton.createContent(vnode, _extends(args, { Shadow: Shadow }));
  },
  component: Button
}));

RaisedButton.theme = coreRaisedButton.theme;
RaisedButton.displayName = "RaisedButton";

export { RaisedButton };
