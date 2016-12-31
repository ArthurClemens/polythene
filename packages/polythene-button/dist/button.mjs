import m from 'mithril';
import { mixin, styler } from 'polythene-css';
import { styles, vars } from 'polythene-theme';
import { shadow } from 'polythene-shadow';
import { ripple } from 'polythene-ripple';
import { filterSupportedAttributes, isTouch, subscribe, touchEndEvent, touchStartEvent } from 'polythene-core';

var rgba = vars.rgba;

var touch_height = vars.unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: vars.grid_unit,
  border_radius: vars.unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * vars.grid_unit,
  padding_v: 11,
  min_width: 8 * vars.grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

  color_light_flat_normal_background: "transparent",
  color_light_flat_normal_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_flat_hover_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_flat_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_flat_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_flat_disabled_background: "transparent",
  color_light_flat_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  // border colors  may be set in theme; disabled by default
  // color_light_flat_normal_border: "transparent",
  // color_light_flat_hover_border: "transparent",
  // color_light_flat_active_border: "transparent",
  // color_light_flat_disabled_border: "transparent",

  color_light_raised_normal_background: "#E0E0E0",
  color_light_raised_normal_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_raised_hover_background: "transparent",
  color_light_raised_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_raised_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover), // same as hover
  color_light_raised_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_light_raised_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),

  color_dark_flat_normal_background: "transparent",
  color_dark_flat_normal_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_flat_hover_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_flat_focus_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_flat_active_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_flat_disabled_background: "transparent",
  color_dark_flat_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),

  // border colors  may be set in theme; disabled by default
  // color_dark_flat_normal_border: "transparent",
  // color_dark_flat_hover_border: "transparent",
  // color_dark_flat_active_border: "transparent",
  // color_dark_flat_disabled_border: "transparent",

  color_dark_raised_normal_background: rgba(vars.color_primary),
  color_dark_raised_normal_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_raised_hover_background: vars.color_primary_active,
  color_dark_raised_focus_background: vars.color_primary_active,
  color_dark_raised_active_background: vars.color_primary_dark,
  color_dark_raised_disabled_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
  color_dark_raised_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
};

var createStyles = function createStyles(config) {
  return [{
    ".pe-button": [mixin.vendorize({
      "user-select": "none"
    }, vars.prefixes_user_select), {
      outline: "none",
      padding: 0,
      "text-decoration": "none",
      "text-align": "center",
      cursor: "pointer",

      "&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
        cursor: "default",
        "pointer-events": "none"
      },

      " .pe-button__content": {
        position: "relative",
        "border-radius": "inherit"
      },

      " .pe-button__label": [mixin.fontSmoothing(), {
        position: "relative",
        display: "block",
        "border-radius": "inherit",
        "pointer-events": "none"
      }],

      " .pe-button__wash, .pe-button__focus": [mixin.defaultTransition("background-color"), mixin.fit(), {
        "border-radius": "inherit",
        "pointer-events": "none"
      }],

      " .pe-button__focus": {
        opacity: 0
      },

      "&.pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      },

      " .pe-button__wash": {
        "z-index": 0
      }
    }],
    ".pe-button--text": {
      display: "inline-block",
      "min-width": config.min_width + "px",
      margin: "0 " + config.margin_h + "px",
      padding: config.outer_padding_v + "px 0",
      background: "transparent",
      border: "none",

      " .pe-button__content": {
        position: "relative",
        "border-width": 0,
        padding: "0 " + config.padding_h + "px",
        "border-radius": config.border_radius + "px"
      },

      " .pe-button__label": {
        padding: config.padding_v + "px 0",
        "font-size": config.font_size + "px",
        "line-height": config.font_size + "px",
        "font-weight": config.font_weight,
        "text-transform": config.text_transform,
        "white-space": "pre"
      },

      "&.pe-button--borders": {
        " .pe-button__wash, pe-button__focus, .pe-ripple": mixin.fit(-1),

        " .pe-button__content": {
          "border-style": "solid",
          "border-width": "1px"
        },
        " .pe-button__label": {
          padding: config.padding_v - 1 + "px 0"
        }
      }
    }
  }];
};

var layout = (function (config) {
  return mixin.createStyles(config, createStyles);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
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
};

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

var style = function style(config, tint, type) {
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  var normalBorder = config["color_" + tint + "_" + type + "_normal_border"] || "transparent";
  var activeBorder = config["color_" + tint + "_" + type + "_active_border"] || normalBorder;
  var disabledBorder = config["color_" + tint + "_" + type + "_disabled_border"] || normalBorder;
  return [defineProperty({}, scope + ".pe-button", {
    "&, &:link, &:visited": {
      color: config["color_" + tint + "_" + type + "_normal_text"]
    },

    " .pe-button__content": {
      "background-color": config["color_" + tint + "_" + type + "_normal_background"],
      "border-color": normalBorder
    },

    "&.pe-button--disabled": {
      color: config["color_" + tint + "_" + type + "_disabled_text"],

      " .pe-button__content": {
        "background-color": config["color_" + tint + "_" + type + "_disabled_background"],
        "border-color": disabledBorder
      }
    },

    "&.pe-button--selected": {
      " .pe-button__content": {
        "background-color": config["color_" + tint + "_" + type + "_active_background"],
        "border-color": activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        "background-color": config["color_" + tint + "_" + type + "_focus_background"]
      }
    },

    "&.pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        "background-color": config["color_" + tint + "_" + type + "_focus_background"]
      }
    }
  })];
};

var noTouch = function noTouch(config, tint, type) {
  var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

  var normalBorder = config["color_" + tint + "_" + type + "_normal_border"];
  var hoverBorder = config["color_" + tint + "_" + type + "_normal_border"] || normalBorder;
  return [defineProperty({}, scope + ".pe-button:hover", {
    "&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      "background-color": config["color_" + tint + "_" + type + "_hover_background"],
      "border-color": hoverBorder
    }
  })];
};

var createStyles$1 = function createStyles(config) {
  return [style(config, "light", "flat"), style(config, "light", "raised", ".pe-button--raised"), {
    "html.pe-no-touch": [noTouch(config, "light", "flat", " "), noTouch(config, "light", "raised", " .pe-button--raised")]
  }, {
    ".pe-dark-theme": [
    // inside dark theme
    style(config, "dark", "flat", " "),
    // has dark theme
    style(config, "dark", "flat", "&"),
    //
    style(config, "dark", "raised", " .pe-button--raised")]
  }, {
    "html.pe-no-touch .pe-dark-theme": [noTouch(config, "dark", "flat", " "), noTouch(config, "dark", "flat", "&"), noTouch(config, "dark", "raised", " .pe-button--raised")]
  }];
};

var color = (function (config) {
  return mixin.createStyles(config, createStyles$1);
});

styler.styleComponent("pe-button-text", "button", styles, vars$1, layout, color);

var CSS_CLASSES = {
  component: "pe-button pe-button--text",
  content: "pe-button__content",
  label: "pe-button__label",
  raised: "pe-button--raised",
  wash: "pe-button__wash",
  focus: "pe-button__focus",
  selected: "pe-button--selected",
  disabled: "pe-button--disabled",
  borders: "pe-button--borders",
  inactive: "pe-button--inactive",
  focusState: "pe-button--focus"
};

var EL_ATTRS = ["formaction", "type"];

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

subscribe(touchEndEvent, function () {
  return tapEndAll();
});

var animateZ = function animateZ(state, attrs, name) {
  var zBase = state.zBase;
  var increase = attrs.increase || 1;
  var z = state.z;
  if (name === "down" && zBase !== 5) {
    z = Math.min(z + increase, MAX_Z);
  } else if (name === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== state.z) {
    state.z = z;
    m.redraw(); // show shadow animation
  }
};

var inactivate = function inactivate(state, attrs) {
  state.inactive = true;
  m.redraw();
  setTimeout(function () {
    state.inactive = false;
    m.redraw();
  }, attrs.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, state, attrs) {
  var tapHandler = function tapHandler(state, attrs, name) {
    if (name === "down") {
      downButtons.push({
        state: state,
        attrs: attrs
      });
    } else if (name === "up") {
      if (attrs.inactivate && !state.inactive) {
        inactivate(state, attrs);
      }
    }
    // no z animation on touch
    var animateOnTap = attrs.animateOnTap !== false ? true : false;
    if (animateOnTap && !isTouch) {
      animateZ(state, attrs, name);
    }
  };
  tapStart = function tapStart() {
    return tapHandler(state, attrs, "down");
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (btn) {
      tapHandler(btn.state, btn.attrs, "up");
    });
    downButtons = [];
  };
  el.addEventListener(touchStartEvent, tapStart);
};

var clearTapEvents = function clearTapEvents(el) {
  el.removeEventListener(touchStartEvent, tapStart);
};

var view = function view(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var element = attrs.element || "a";
  var tabIndex = disabled || state.inactive ? -1 : attrs.tabindex || 0;
  var onClickHandler = attrs.events && attrs.events.onclick;
  var props = _extends({}, filterSupportedAttributes(attrs, EL_ATTRS), {
    class: [attrs.parentClass || CSS_CLASSES.component, attrs.selected ? CSS_CLASSES.selected : null, disabled ? CSS_CLASSES.disabled : null, state.inactive ? CSS_CLASSES.inactive : null, attrs.borders ? CSS_CLASSES.borders : null, attrs.raised ? CSS_CLASSES.raised : null, state.focus ? CSS_CLASSES.focusState : null, attrs.class].join(" "),
    tabIndex: tabIndex,
    // handle focus events
    onfocus: function onfocus() {
      return state.focus = !state.mouseover;
    },
    onblur: function onblur() {
      return state.focus = false;
    },
    // don"t show focus on click (detected by not being in mouse over state)
    onmouseover: function onmouseover() {
      return state.mouseover = true;
    },
    onmouseout: function onmouseout() {
      return state.mouseover = false;
    },
    // if focus, dispatch click event on ENTER
    onkeydown: function onkeydown(e) {
      if (e.which === 13 && state.focus) {
        state.focus = false;
        if (onClickHandler) {
          onClickHandler(e);
        }
      }
    }
  }, attrs.events ? _extends({}, attrs.events) : null, disabled ? { disabled: true } : null);
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : m("div", { class: CSS_CLASSES.label }, attrs.label) : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  var content = label ? m("div", { class: CSS_CLASSES.content }, [attrs.raised && !disabled ? m(shadow, { z: state.z, animated: true }) : null,
  // ripple
  disabled || noink ? null : m(ripple, attrs.ripple),
  // hover
  noWash ? null : m("div", { class: CSS_CLASSES.wash }),
  // focus
  disabled ? null : m("div", { class: CSS_CLASSES.focus }), label]) : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

var button = {
  oninit: function oninit(vnode) {
    var z = vnode.attrs.z !== undefined ? vnode.attrs.z : 1;
    vnode.state = {
      el: undefined,
      zBase: z,
      z: z,
      tapEventsInited: false,
      inactive: !!vnode.attrs.inactive,
      focus: false,
      mouseover: false
    };
  },
  oncreate: function oncreate(vnode) {
    if (!vnode.attrs.disabled && !vnode.state.inactive && !vnode.state.tapEventsInited) {
      vnode.state.el = vnode.dom;
      initTapEvents(vnode.dom, vnode.state, vnode.attrs);
      vnode.state.tapEventsInited = true;
    }
  },
  onremove: function onremove(vnode) {
    if (vnode.state.tapEventsInited) {
      clearTapEvents(vnode.dom);
    }
  },
  view: view
};

export { button, vars$1 as buttonVars };
