import { BaseSpinner } from 'polythene-react-base-spinner';
import { _Spinner } from 'polythene-core-material-design-progress-spinner';
import { cast, h, useState, useRef, useEffect } from 'cyano-react';
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
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
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
  useState: useState,
  useRef: useRef,
  useEffect: useEffect,
  BaseSpinner: BaseSpinner
});
var SpinnerToggle = cast(_Conditional, {
  h: h,
  useState: useState,
  useEffect: useEffect
});
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";
/**
 * @param {Vnode} props 
 */

var MaterialDesignProgressSpinner = function MaterialDesignProgressSpinner(props) {
  return h(SpinnerToggle, _objectSpread({}, props, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: Spinner
  }));
};
MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";

export { MaterialDesignProgressSpinner };
