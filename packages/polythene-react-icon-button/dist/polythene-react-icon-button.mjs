import { StateComponent } from 'polythene-react-base';
import { coreIconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var IconButton = StateComponent(_extends({}, coreIconButton, {
  createProps: function createProps(vnode, args) {
    return coreIconButton.createProps(vnode, _extends(args, {
      Icon: Icon
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreIconButton.createContent(vnode, _extends(args, {
      Icon: Icon
    }));
  },
  component: Button
}));
IconButton.displayName = "IconButton";

export { IconButton };
