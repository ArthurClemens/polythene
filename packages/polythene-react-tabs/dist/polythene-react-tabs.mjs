import { ComponentCreator } from 'polythene-react-base';
import { coreTab, coreScrollButton, coreTabs } from 'polythene-core-tabs';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';
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

var Tab = ComponentCreator(_objectSpread({}, coreTab, {
  createProps: function createProps(vnode, args) {
    return coreTab.createProps(vnode, _objectSpread({}, args, {
      Icon: Icon
    }));
  },
  component: Button
}));
Tab["displayName"] = "Tab";

var ScrollButton = ComponentCreator(_objectSpread({}, coreScrollButton, {
  component: IconButton
}));
ScrollButton["displayName"] = "ScrollButton";

var Tabs = ComponentCreator(_objectSpread({}, coreTabs, {
  createContent: function createContent(vnode, args) {
    return coreTabs.createContent(vnode, _objectSpread({}, args, {
      Tab: Tab,
      ScrollButton: ScrollButton
    }));
  }
}));
Tabs["displayName"] = "Tabs";

export { Tabs };
