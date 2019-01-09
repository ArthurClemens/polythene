import { ComponentCreator } from 'polythene-react-base';
import { coreIconButton } from 'polythene-core-icon-button';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var IconButton = ComponentCreator(_objectSpread({}, coreIconButton, {
  createProps: function createProps(vnode, args) {
    return coreIconButton.createProps(vnode, _objectSpread({}, args, {
      Icon: Icon
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreIconButton.createContent(vnode, _objectSpread({}, args, {
      Icon: Icon
    }));
  },
  component: Button
}));
IconButton["displayName"] = "IconButton";

export { IconButton };
