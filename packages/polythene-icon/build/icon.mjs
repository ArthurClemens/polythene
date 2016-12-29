import m from 'mithril';
import { filterSupportedAttributes } from 'polythene-core';
import { svg } from 'polythene-svg';
import { mixin, styler } from 'polythene-css';
import { appConfig, componentsConfig } from 'polythene-config';

var componentConfig = {
  size_small: appConfig.unit_icon_size_small,
  size_regular: appConfig.unit_icon_size,
  size_medium: appConfig.unit_icon_size_medium,
  size_large: appConfig.unit_icon_size_large
};

var iconSizesPx = function iconSizesPx() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : appConfig.unit_icon_size;
  return {
    width: size + "px",
    height: size + "px"
  };
};

var createStyles = function createStyles(config) {
  return [{
    ".pe-icon": {
      display: "inline-block",
      "vertical-align": "middle",
      "background-repeat": "no-repeat",
      fill: "currentcolor",
      position: "relative",
      "font-size": 0,
      "line-height": 0,

      "&.pe-icon--avatar img": {
        border: "none",
        "border-radius": "50%",
        width: "100%",
        height: "100%"
      },

      " img": {
        height: "100%"
      },

      " svg": {
        width: "100%",
        height: "100%",
        fill: "currentcolor",
        color: "inherit",

        " path, rect, polygon": {
          "&:not([fill=none])": {
            fill: "currentcolor"
          }
        }
      },

      "&.pe-icon--small": iconSizesPx(config.size_small),
      "&.pe-icon--regular": iconSizesPx(config.size_regular),
      "&.pe-icon--medium": iconSizesPx(config.size_medium),
      "&.pe-icon--large": iconSizesPx(config.size_large)
    }
  }];
};

var layout = (function (config) {
  return mixin.createStyles(config, createStyles);
});

// Does not contain color styles

styler.styleComponent("pe-icon", "icon", componentsConfig, componentConfig, layout);

var _extends = Object.assign || function (target) {
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

var CSS_CLASSES = {
  icon: "pe-icon",
  avatar: "pe-icon--avatar",
  small: "pe-icon--small",
  regular: "pe-icon--regular",
  medium: "pe-icon--medium",
  large: "pe-icon--large"
};

var typeClasses = {
  small: CSS_CLASSES.small,
  regular: CSS_CLASSES.regular,
  medium: CSS_CLASSES.medium,
  large: CSS_CLASSES.large
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [CSS_CLASSES.icon, classForType(attrs.type), attrs.avatar ? CSS_CLASSES.avatar : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.svg ? m(svg, _extends({}, attrs.svg)) : attrs.msvg ? m(svg, { content: attrs.msvg }) : attrs.src ? m("img", { src: attrs.src }) : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var icon = {
  view: view
};

export { icon, componentConfig as iconConfig };
