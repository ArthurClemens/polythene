import { BaseSpinner } from 'polythene-react-base-spinner';
import { _Spinner } from 'polythene-core-material-design-spinner';
import { cast, h } from 'cyano-react';
import { ComponentCreator, renderer } from 'polythene-react-base';
import { coreConditional } from 'polythene-core';

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
// import classes from "polythene-css-classes/material-design-spinner";
// import { BaseSpinner } from "polythene-react-base-spinner";
// const SpinnerInstance = ComponentCreator({
//   ...core,
//   component: BaseSpinner
// });

var SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignSpinnerToggle";
/**
 * @param {Vnode} props 
 */

var MaterialDesignSpinner = function MaterialDesignSpinner(props) {
  return renderer(SpinnerToggle, _objectSpread({}, props, {
    placeholderClassName: classes.placeholder,
    instance: Spinner
  }));
};
MaterialDesignSpinner["classes"] = classes;
MaterialDesignSpinner["displayName"] = "MaterialDesignSpinner";

export { Spinner, MaterialDesignSpinner };
