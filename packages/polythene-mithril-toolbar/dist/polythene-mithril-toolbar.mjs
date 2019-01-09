import { ComponentCreator } from 'polythene-mithril-base';
import { coreToolbar, coreToolbarTitle } from 'polythene-core-toolbar';
import { Shadow } from 'polythene-mithril-shadow';

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

var Toolbar = ComponentCreator(_objectSpread({}, coreToolbar, {
  createContent: function createContent(vnode, args) {
    return coreToolbar.createContent(vnode, _extends(args, {
      Shadow: Shadow
    }));
  }
}));
Toolbar["displayName"] = "Toolbar";

// @ts-check
var ToolbarTitle = ComponentCreator(coreToolbarTitle);
ToolbarTitle["displayName"] = "ToolbarTitle";

// @ts-check

export { Toolbar, ToolbarTitle };
