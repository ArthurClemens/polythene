import { deprecation } from 'polythene-core';

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

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    selectable: attrs.selectable || function () {
      return true;
    },
    // default: always selectable, regardless of the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var _switch = /*#__PURE__*/Object.freeze({
  createProps: createProps
});

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};
var onMount = function onMount(_ref) {
  var attrs = _ref.attrs;

  if (attrs.zOn !== undefined) {
    deprecation("Switch", {
      option: "zOn",
      newOption: "shadowDepthOn"
    });
  }

  if (attrs.zOff !== undefined) {
    deprecation("Switch", {
      option: "zOff",
      newOption: "shadowDepthOff"
    });
  }
};
var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow,
      IconButton = _ref2.IconButton;
  var attrs = vnode.attrs;
  var shadowDepthOff = attrs.shadowDepthOff !== undefined ? attrs.shadowDepthOff : attrs.zOff !== undefined ? attrs.zOff // deprecated
  : 1;
  var shadowDepthOn = attrs.shadowDepthOn !== undefined ? attrs.shadowDepthOn : attrs.zOn !== undefined ? attrs.zOn // deprecated
  : 2;
  var shadowDepth = attrs.checked ? shadowDepthOn : shadowDepthOff;
  var raised = attrs.raised !== undefined ? attrs.raised : true;
  return [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, _extends({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", {
      className: classes.knob
    }, [attrs.icon ? attrs.icon : null, raised ? h(Shadow, {
      shadowDepth: shadowDepth,
      animated: true
    }) : null]),
    style: attrs.style,
    disabled: attrs.disabled,
    events: attrs.events,
    ink: attrs.ink || false,
    inactive: attrs.inactive
  }, attrs.iconButton))];
};

var viewControl = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  onMount: onMount,
  createContent: createContent
});

var _ViewControl = function _ViewControl(_ref) {
  var h = _ref.h,
      IconButton = _ref.IconButton,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "IconButton", "Shadow"]);

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
      className: classes.knob
    }, [props.icon ? props.icon : null, raised ? h(Shadow, {
      shadowDepth: shadowDepth,
      animated: true
    }) : null]),
    style: props.style,
    disabled: props.disabled,
    events: props.events,
    ink: props.ink || false,
    inactive: props.inactive
  }, props.iconButton))]);
};

export { _switch as coreSwitch, viewControl as coreViewControl, _ViewControl };
