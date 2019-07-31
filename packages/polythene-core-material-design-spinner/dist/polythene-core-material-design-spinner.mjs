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

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [classes.layer, classes.layerN + num].join(" ")
  }, [h("div", {
    // key: "clipper-left",
    className: [classes.circleClipper, classes.circleClipperLeft].join(" ")
  }, h("div", {
    // key: "circle",
    className: classes.circle
  })), h("div", {
    // key: "gap-patch",
    className: classes.gapPatch
  }, h("div", {
    className: classes.circle
  })), h("div", {
    // key: "clipper-right",
    className: [classes.circleClipper, classes.circleClipperRight].join(" ")
  }, h("div", {
    className: classes.circle
  }))]);
};

var _Spinner = function _Spinner(_ref) {
  var h = _ref.h,
      BaseSpinner = _ref.BaseSpinner,
      props = _objectWithoutProperties(_ref, ["h", "BaseSpinner"]);

  var content = props.content || h("div", {
    // key: "content",
    className: classes.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));

  var componentProps = _extends({}, props, {
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};

export { _Spinner };
