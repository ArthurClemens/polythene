import { ComponentCreator, renderer } from 'polythene-mithril-base';
import { coreConditional } from 'polythene-core';
import { coreDrawer } from 'polythene-core-drawer';
import { DialogInstance } from 'polythene-mithril-dialog';

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

var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

var DrawerInstance = ComponentCreator(_objectSpread({}, coreDrawer, {
  component: DialogInstance
}));
var DrawerToggle = ComponentCreator(coreConditional);
DrawerToggle["displayName"] = "DrawerToggle";
var Drawer = {
  /**
   * @param {Vnode} vnode
   */
  view: function view(vnode) {
    return renderer(DrawerToggle, _objectSpread({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: vnode.attrs.permanent || vnode.attrs.mini // passed to Conditional

    }));
  }
};
Drawer["displayName"] = "Drawer";

export { Drawer };
