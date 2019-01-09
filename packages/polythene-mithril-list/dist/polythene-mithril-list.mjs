import { ComponentCreator } from 'polythene-mithril-base';
import { coreList } from 'polythene-core-list';
import { ListTile } from 'polythene-mithril-list-tile';

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

var List = ComponentCreator(_objectSpread({}, coreList, {
  createProps: function createProps(vnode, args) {
    return coreList.createProps(vnode, _objectSpread({}, args, {
      ListTile: ListTile
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreList.createContent(vnode, _objectSpread({}, args, {
      ListTile: ListTile
    }));
  }
}));
List["displayName"] = "List";

export { List };
