import { ComponentCreator } from 'polythene-mithril-base';
import { coreListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-mithril-icon';
import { Ripple } from 'polythene-mithril-ripple';

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

var ListTile = ComponentCreator(_objectSpread({}, coreListTile, {
  createProps: function createProps(vnode, args) {
    return coreListTile.createProps(vnode, _objectSpread({}, args, {
      Icon: Icon,
      Ripple: Ripple
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreListTile.createContent(vnode, _objectSpread({}, args, {
      Icon: Icon,
      Ripple: Ripple
    }));
  }
}));
ListTile["displayName"] = "ListTile";

export { ListTile };
