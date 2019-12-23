import { cast, h, a, useState, useEffect, useRef, getRef, useReducer } from 'cyano-mithril';
import { _DialogComponent, openDialogsSelector, _show, _hide, _Dialog } from 'polythene-core-dialog';
import { DialogPane } from 'polythene-mithril-dialog-pane';
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

var DialogComponent = cast(_DialogComponent, {
  h: h,
  a: a,
  useState: useState,
  useEffect: useEffect,
  useRef: useRef,
  getRef: getRef,
  useReducer: useReducer,
  Shadow: Shadow,
  Pane: DialogPane,
  openDialogsSelector: openDialogsSelector
});
var Dialog = _objectSpread2({}, _Dialog, {
  show: _show({
    DialogComponent: DialogComponent
  }),
  hide: _hide,
  displayName: "Dialog"
}); // Object.getOwnPropertyNames(_Dialog)
//   .forEach(p => Dialog[p] = _Dialog[p]);
// const options = {
//   name:           "dialog",
//   htmlShowClass:  classes.open,
//   defaultId:      "default_dialog",
//   holderSelector: `div.${classes.holder}`,
//   instance:       DialogInstance,
//   placeholder:    `span.${classes.placeholder}`
// };
// const MultipleInstance = Multi({ options });
// export const Dialog = cast(MultipleInstance.render, { h, useState, useEffect });
// Object.getOwnPropertyNames(MultipleInstance)
//   .filter(p => p !== "render")
//   .forEach(p => Dialog[p] = MultipleInstance[p]);
// Dialog["displayName"] = "Dialog";

export { Dialog };
