import { BaseSpinner } from 'polythene-react-base-spinner';
import { _Spinner } from 'polythene-core-ios-spinner';
import { cast, h, useState, useEffect } from 'cyano-react';
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
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
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
SpinnerToggle["displayName"] = "IOSSpinnerToggle";
/**
 * @param {Vnode} props 
 */

var IOSSpinner = function IOSSpinner(props) {
  return h(SpinnerToggle, _objectSpread({}, props, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: Spinner
  }));
};
IOSSpinner["classes"] = classes;
IOSSpinner["displayName"] = "IOSSpinner";

export { IOSSpinner };
