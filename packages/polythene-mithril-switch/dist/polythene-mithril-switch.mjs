import { ComponentCreator } from 'polythene-mithril-base';
import { coreViewControl, coreSwitch } from 'polythene-core-switch';
import { coreSelectionControl } from 'polythene-core-selection-control';
import { Shadow } from 'polythene-mithril-shadow';
import { IconButton } from 'polythene-mithril-icon-button';

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

var ViewControl = ComponentCreator(_objectSpread({}, coreViewControl, {
  createContent: function createContent(vnode, args) {
    return coreViewControl.createContent(vnode, _extends(args, {
      Shadow: Shadow,
      IconButton: IconButton
    }));
  }
}));
ViewControl["displayName"] = "ViewControl";

var SelectionControl = ComponentCreator(_objectSpread({}, coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return coreSelectionControl.createContent(vnode, _objectSpread({}, args, {
      ViewControl: ViewControl
    }));
  }
}));
SelectionControl["displayName"] = "SelectionControl";

var Switch = ComponentCreator(_objectSpread({}, coreSwitch, {
  component: SelectionControl
}));
Switch["displayName"] = "Switch";

export { Switch };
