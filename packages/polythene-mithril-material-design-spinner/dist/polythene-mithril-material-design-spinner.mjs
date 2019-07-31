import { BaseSpinner } from 'polythene-mithril-base-spinner';
import { _Spinner } from 'polythene-core-material-design-spinner';
import { cast, h, useState, useEffect } from 'cyano-mithril';
import { _Conditional } from 'polythene-core';

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

var classes = {
  component: "pe-md-spinner",
  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var Spinner = cast(_Spinner, {
  h: h,
  BaseSpinner: BaseSpinner
});
var SpinnerToggle = cast(_Conditional, {
  h: h,
  useState: useState,
  useEffect: useEffect
});
SpinnerToggle["displayName"] = "MaterialDesignSpinnerToggle";
var MaterialDesignSpinner = {
  view: function view(vnode) {
    return h(SpinnerToggle, _objectSpread2({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    }));
  }
};
MaterialDesignSpinner["classes"] = classes;
MaterialDesignSpinner["displayName"] = "MaterialDesignSpinner";

export { MaterialDesignSpinner };
