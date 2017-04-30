import { createContent, createProps, theme } from 'polythene-button';
import { StateComponent } from 'polythene-react-core';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = StateComponent(createProps, createContent, "a", {
  focus: false,
  mouseover: false,
  inactive: false
});

var index = _extends(Button, { theme: theme });

export default index;
