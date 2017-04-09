import { filterSupportedAttributes, hide, multiple, show } from 'polythene-core';
import m from 'mithril';
import { flex, styler } from 'polythene-css';
import { vars } from 'polythene-theme';
import { Timer } from 'polythene-utilities';

var rgba = vars.rgba;

var buttonPaddingH = 8; // padding, inner text space

var vars$1 = {
  width: 274,
  min_height: 80,
  border_radius: vars.unit_block_border_radius,
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  title_multi_padding_v: 20,
  side_padding: 24 - buttonPaddingH,
  font_size: 14,
  line_height: 20,

  color_light_background: rgba(vars.color_light_background, .85),
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_dark_primary),

  color_dark_background: rgba(vars.color_dark_background),
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_light_text_primary)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, _defineProperty(_ref, selector, [flex.layoutCenter, {
    width: componentVars.width + "px",
    minHeight: componentVars.min_height + "px",
    position: "relative",
    padding: "0 " + componentVars.side_padding + "px",
    margin: "0 auto",
    borderRadius: componentVars.border_radius + "px",
    pointerEvents: "all",

    " .pe-notification__content": {
      width: "100%"
    },

    " .pe-notification__title": {
      padding: componentVars.title_single_padding_v + "px " + componentVars.title_padding_h + "px",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.line_height + "px"
    },

    " .pe-notification__action": {
      " .pe-button": {
        margin: 0
      }
    },

    "&.pe-notification--horizontal": {
      " .pe-notification__content": flex.layoutHorizontal,
      " .pe-notification__title": flex.flex(),
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px",
        paddingBottom: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": flex.layoutCenter
    },
    "&.pe-notification--vertical": {
      " .pe-notification__content": flex.layoutVertical,
      " .pe-notification__title": {
        paddingBottom: "4px"
      },
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": flex.layoutEndJustified
    }
  }]), _defineProperty(_ref, ".pe-notification__holder", [flex.layoutCenterCenter, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: vars.z_notification,
    pointerEvents: "none",

    ":not(.pe-notification--container)": {
      position: "fixed"
    },
    ".pe-notification--container": {
      position: "absolute"
    }
  }]), _ref)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint + "_text"],
    background: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme", selector, componentVars, "dark"), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-notification";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  holder: "pe-notification__holder",
  content: "pe-notification__content",
  title: "pe-notification__title",
  multilineTitle: "pe-notification__title--multiline",
  action: "pe-notification__action",
  horizontal: "pe-notification--horizontal",
  vertical: "pe-notification--vertical",
  hasContainer: "pe-notification--container"
};

var DEFAULT_TIME_OUT = 3;

var pauseInstance = function pauseInstance(state) {
  state.isPaused = true;
  if (state.timer) {
    state.timer.pause();
  }
};

var unpauseInstance = function unpauseInstance(state) {
  state.isPaused = false;
  if (state.timer) {
    state.timer.resume();
  }
};

var stopTimer = function stopTimer(state) {
  if (state.timer) {
    state.timer.stop();
  }
};

var prepareShow = function prepareShow(state, opts) {
  state.containerEl = state.containerEl || document.querySelector(opts.containerSelector || "." + classes.holder);
  if (opts.containerSelector) {
    var holderEl = state.containerEl.querySelector("." + classes.holder);
    holderEl.classList.add(classes.hasContainer);
  }
};

var showInstance = function showInstance(state, opts) {
  prepareShow(state, opts);
  stopTimer(state);
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return show(_extends({}, opts, transitions.show(state.containerEl, opts))).then(function () {
    state.transitioning = false;
    if (state.didShow) {
      // notify multiple
      state.didShow(state.instanceId);
      // this will call opts.didShow
    }
    // set timer to hide in a few seconds
    var timeout = opts.timeout;
    if (timeout === 0) {
      // do not time out
    } else {
      var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
      state.timer = new Timer(function () {
        hideInstance(state, opts);
      }, timeoutSeconds);
    }
  });
};

var hideInstance = function hideInstance(state, opts) {
  stopTimer(state);
  var id = state.instanceId;
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return hide(_extends({}, opts, transitions.hide(state.containerEl, opts))).then(function () {
    stopTimer(state);
    state.transitioning = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    m.redraw(); // removes remainder of drawn component
  });
};

var createView = function createView(state, opts) {
  var element = opts.element || "div";
  var isDarkTheme = opts.theme !== "light";
  var props = _extends({}, filterSupportedAttributes(opts), {
    class: [state.class, opts.class, isDarkTheme ? "pe-dark-theme" : null, opts.containerSelector ? classes.hasContainer : null, opts.layout === "vertical" ? classes.vertical : classes.horizontal].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      showInstance(state, opts);
    },
    onclick: function onclick(e) {
      return e.preventDefault();
    }
  });

  var content = m("div", {
    class: classes.content
  }, opts.content || [opts.title ? m("div", {
    class: classes.title,
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      var height = dom.getBoundingClientRect().height;
      var lineHeight = parseInt(window.getComputedStyle(dom).lineHeight, 10);
      var paddingTop = parseInt(window.getComputedStyle(dom).paddingTop, 10);
      var paddingBottom = parseInt(window.getComputedStyle(dom).paddingBottom, 10);
      if (height > lineHeight + paddingTop + paddingBottom) {
        dom.classList.add(classes.multilineTitle);
      }
    }
  }, opts.title) : null, opts.action ? m("div", { class: classes.action }, [opts.action]) : null]);
  return m(element, props, content);
};

var instance = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    vnode.state = _extends(vnode.state, attrs, {
      el: null,
      containerEl: null,
      dismissEl: null,
      transitioning: false,
      timer: null,
      isPaused: false
    });
  },
  view: function view(_ref3) {
    var state = _ref3.state,
        attrs = _ref3.attrs;

    // attrs contains {id, opts}
    var opts = typeof attrs.opts === "function" ? attrs.opts() : attrs.opts;
    if (attrs.hide && !state.transitioning) {
      hideInstance(state, opts);
    }
    if (attrs.pause && !state.isPaused) {
      pauseInstance(state, attrs);
    } else if (attrs.unpause && state.isPaused) {
      unpauseInstance(state, attrs);
    }
    return createView(state, opts);
  }
};

var show$1 = function show$$1(el, opts) {
  return {
    el: el,
    showDuration: opts.showDuration || .5,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(el, opts) {
  return {
    el: el,
    hideDuration: opts.hideDuration || .5,
    hideDelay: opts.hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};

var notification = multiple({
  instance: instance,
  class: "pe-notification",
  defaultId: "default_notification",
  element: ".pe-notification__holder",
  placeholder: "span.pe-notification__placeholder",
  bodyShowClass: "pe-notification--open",
  queue: true,
  transitions: transitions
});

export { classes, vars$1 as vars };export default notification;
