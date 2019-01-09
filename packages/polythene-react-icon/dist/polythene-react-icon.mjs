import { ComponentCreator } from 'polythene-react-base';
import { coreIcon } from 'polythene-core-icon';
import { SVG } from 'polythene-react-svg';

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

var Icon = ComponentCreator(_objectSpread({}, coreIcon, {
  createProps: function createProps(vnode, args) {
    return coreIcon.createProps(vnode, _objectSpread({}, args, {
      SVG: SVG
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreIcon.createContent(vnode, _objectSpread({}, args, {
      SVG: SVG
    }));
  }
}));
Icon["displayName"] = "Icon";

export { Icon };
