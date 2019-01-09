import { ComponentCreator } from 'polythene-react-base';
import { coreCheckbox } from 'polythene-core-checkbox';
import { coreViewControl, coreSelectionControl } from 'polythene-core-selection-control';
import { Icon } from 'polythene-react-icon';
import { IconButton } from 'polythene-react-icon-button';

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

var ViewControl = ComponentCreator(_objectSpread({}, coreViewControl, {
  createContent: function createContent(vnode, args) {
    return coreViewControl.createContent(vnode, _objectSpread({}, args, {
      Icon: Icon,
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

var Checkbox = ComponentCreator(_objectSpread({}, coreCheckbox, {
  component: SelectionControl
}));
Checkbox["displayName"] = "Checkbox";

export { Checkbox };
