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
  component: "pe-button pe-icon-button",
  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",
  // states
  compact: "pe-icon-button--compact"
};

var _IconButton = function _IconButton(_ref) {
  var h = _ref.h,
      Icon = _ref.Icon,
      Button = _ref.Button,
      props = _objectWithoutProperties(_ref, ["h", "Icon", "Button"]);

  var content = props.content ? props.content : props.icon ? h(Icon, props.icon) : props.children;

  var buttonProps = _extends({}, {
    element: props.element || "button",
    content: h("div", {
      className: classes.content
    }, content),
    after: props.label && h("div", {
      className: classes.label
    }, props.label),
    parentClassName: [props.parentClassName || classes.component, props.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, props);

  return h(Button, buttonProps);
};

export { _IconButton };
