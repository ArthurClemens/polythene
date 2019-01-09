import { ComponentCreator } from 'polythene-react-base';
import { coreSearch } from 'polythene-core-search';
import { TextField } from 'polythene-react-textfield';

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

var Search = ComponentCreator(_objectSpread({}, coreSearch, {
  createContent: function createContent(vnode, args) {
    return coreSearch.createContent(vnode, _objectSpread({}, args, {
      TextField: TextField
    }));
  }
}));
Search["displayName"] = "Search";

export { Search };
