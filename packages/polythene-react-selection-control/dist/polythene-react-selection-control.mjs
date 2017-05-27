import { stateComponent } from 'polythene-react-base';
import { CoreSelectionControl } from 'polythene-core-selection-control';
import { Icon } from 'polythene-react-icon';
import { IconButton } from 'polythene-react-icon-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createControl = CoreSelectionControl.createControl;
var createContent = function createContent(vnode, args) {
  return CoreSelectionControl.createContent(vnode, _extends(args, { Icon: Icon, IconButton: IconButton }));
};

var SelectionControl = stateComponent(_extends({}, CoreSelectionControl, {
  createContent: createContent
}));

export { SelectionControl, createControl };
