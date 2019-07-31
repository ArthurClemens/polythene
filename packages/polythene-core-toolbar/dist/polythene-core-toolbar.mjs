import { filterSupportedAttributes } from 'polythene-core';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var classes = {
  // Toolbar
  component: "pe-toolbar",
  // states
  compact: "pe-toolbar--compact",
  appBar: "pe-toolbar--app-bar",
  // Toolbar title
  // elements
  title: "pe-toolbar__title",
  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent",
  fullbleed: "pe-toolbar--fullbleed",
  border: "pe-toolbar--border"
};

var _Toolbar = function _Toolbar(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "Shadow"]);

  var componentProps = _extends({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.compact ? classes.compact : null, props.fullbleed ? classes.fullbleed : null, props.border ? classes.border : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var componentContent = props.content || props.children;
  var shadow = props.shadowDepth !== undefined ? h(Shadow, {
    shadowDepth: props.shadowDepth,
    animated: true
  }) : null;
  var content = [props.before, componentContent, props.after, shadow];
  return h(props.element || "div", componentProps, content);
};

var _ToolbarTitle = function _ToolbarTitle(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var element = props.element ? props.element : props.url ? "a" : "div";

  var componentProps = _extends({}, filterSupportedAttributes(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.title, props.indent ? classes.indentedTitle : null, props.center ? classes.centeredTitle : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events, props.url);

  var content = props.text ? props.text : props.content ? props.content : props.children;
  return h(element, componentProps, content);
};

export { _Toolbar, _ToolbarTitle };
