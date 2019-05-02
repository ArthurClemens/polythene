import { ComponentCreator } from 'polythene-mithril-base';
import { _ViewControl, coreSwitch } from 'polythene-core-switch';
import { cast, h } from 'cyano-mithril';
import { Shadow } from 'polythene-mithril-shadow';
import { IconButton } from 'polythene-mithril-icon-button';
import { coreSelectionControl } from 'polythene-core-selection-control';

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

var ViewControl = cast(_ViewControl, {
  h: h,
  Shadow: Shadow,
  IconButton: IconButton
});
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
