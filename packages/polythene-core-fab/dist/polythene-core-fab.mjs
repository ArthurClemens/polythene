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
  component: "pe-fab",
  // elements
  content: "pe-fab__content",
  // states
  mini: "pe-fab--mini"
};

var _FAB = function _FAB(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Button = _ref.Button,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Button", "Icon"]);

  var content = props.content ? props.content : props.icon ? h(Icon, props.icon) : props.children;

  var componentProps = _extends({}, props, {
    content: h("div", {
      className: classes.content
    }, content),
    parentClassName: [classes.component, props.mini ? classes.mini : null, props.className || props[a["class"]]].join(" "),
    className: null,
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: {
      increase: 5
    },
    ink: true,
    wash: true,
    raised: true,
    animateOnTap: props.animateOnTap !== undefined ? props.animateOnTap : true
  });

  return h(Button, componentProps, content);
};

export { _FAB };
