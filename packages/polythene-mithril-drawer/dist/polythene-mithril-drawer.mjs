import { _Conditional } from 'polythene-core';
import { cast, h, useState, useEffect } from 'cyano-mithril';
import { _Drawer, openDialogsSelector } from 'polythene-core-drawer';
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var dialogClasses = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};

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
  anchorEnd: "pe-drawer--anchor-end",
  visible: dialogClasses.visible
};

var DrawerInstance = cast(_Drawer, {
  h: h,
  Dialog: DialogInstance,
  openDialogsSelector: openDialogsSelector
});
DrawerInstance["displayName"] = "DrawerInstance";
var DrawerToggle = cast(_Conditional, {
  h: h,
  useState: useState,
  useEffect: useEffect
});
DrawerToggle["displayName"] = "DrawerToggle";
var Drawer = {
  view: function view(vnode) {
    return h(DrawerToggle, _objectSpread2({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: vnode.attrs.permanent || vnode.attrs.mini // passed to Conditional

    }));
  }
};
Drawer["displayName"] = "Drawer";

export { Drawer };
