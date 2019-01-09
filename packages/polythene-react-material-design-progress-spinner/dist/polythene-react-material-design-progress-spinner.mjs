import { ComponentCreator, renderer } from 'polythene-react-base';
import { coreConditional } from 'polythene-core';
import { coreMaterialDesignProgressSpinner } from 'polythene-core-material-design-progress-spinner';
import { BaseSpinner } from 'polythene-react-base-spinner';

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

var SpinnerInstance = ComponentCreator(_objectSpread({}, coreMaterialDesignProgressSpinner, {
  component: BaseSpinner
}));
var SpinnerToggle = ComponentCreator(coreConditional);
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";
var MaterialDesignProgressSpinner = function MaterialDesignProgressSpinner(props) {
  return renderer(SpinnerToggle, _objectSpread({}, props, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  }));
};
MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";

export { MaterialDesignProgressSpinner };
