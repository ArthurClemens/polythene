import { ComponentCreator, renderer } from 'polythene-mithril-base';
import { coreButton, coreRaisedButton } from 'polythene-core-button';
import { Ripple } from 'polythene-mithril-ripple';
import { Icon } from 'polythene-mithril-icon';
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

var TextButton = ComponentCreator(_objectSpread({}, coreButton, {
  createProps: function createProps(vnode, args) {
    return coreButton.createProps(vnode, _objectSpread({}, args, {
      Ripple: Ripple,
      Icon: Icon,
      Shadow: Shadow
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreButton.createContent(vnode, _objectSpread({}, args, {
      Ripple: Ripple,
      Icon: Icon,
      Shadow: Shadow
    }));
  }
}));
TextButton["displayName"] = "TextButton";

var RaisedButton = ComponentCreator(_objectSpread({}, coreRaisedButton, {
  createProps: function createProps(vnode, args) {
    return coreRaisedButton.createProps(vnode, _objectSpread({}, args, {
      Shadow: Shadow
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreRaisedButton.createContent(vnode, _objectSpread({}, args, {
      Shadow: Shadow
    }));
  },
  component: TextButton
}));
RaisedButton["displayName"] = "RaisedButton";

// @ts-check
var Button = ComponentCreator({
  /**
   * @param {Vnode} vnode
   */
  view: function view(vnode) {
    return renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children);
  }
});
Button["displayName"] = "Button";

export { Button };
