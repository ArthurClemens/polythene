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
  component: "pe-switch-control",
  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

var _Switch = function _Switch(_ref) {
  var h = _ref.h,
      SelectionControl = _ref.SelectionControl,
      props = _objectWithoutProperties(_ref, ["h", "SelectionControl"]);

  var componentProps = _extends({}, props, {
    selectable: props.selectable || function () {
      return true;
    },
    // default: always selectable, regardless of the checked state
    instanceClass: classes.component,
    type: "checkbox",
    role: props.role || "switch"
  });

  return h(SelectionControl, componentProps);
};

var _ViewControl = function _ViewControl(_ref) {
  var h = _ref.h;
      _ref.a;
      var IconButton = _ref.IconButton,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "IconButton", "Shadow"]);

  var element = props.element || "div";
  var shadowDepthOff = props.shadowDepthOff !== undefined ? props.shadowDepthOff : props.zOff !== undefined ? props.zOff // deprecated
  : 1;
  var shadowDepthOn = props.shadowDepthOn !== undefined ? props.shadowDepthOn : props.zOn !== undefined ? props.zOn // deprecated
  : 2;
  var shadowDepth = props.checked ? shadowDepthOn : shadowDepthOff;
  var raised = props.raised !== undefined ? props.raised : true;
  return h(element, null, [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, _extends({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", {
      className: classes.knob,
      style: props.style
    }, [props.icon ? props.icon : null, raised ? h(Shadow, {
      shadowDepth: shadowDepth,
      animated: true
    }) : null]),
    disabled: props.disabled,
    events: props.events,
    ink: props.ink || false,
    inactive: props.inactive,
    aria: _extends({}, props.aria, {
      role: "switch",
      id: props.id,
      "aria-checked": props.checked.toString(),
      "aria-readonly": (props.disabled || props.inactive).toString()
    })
  }, props.iconButton))]);
};

export { _Switch, _ViewControl };
