import { filterSupportedAttributes, hide, multiple, show, subscribe, unsubscribe } from 'polythene-core';
import m from 'mithril';
import { shadow } from 'polythene-shadow';
import { flex, mixin, styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;

var vars$1 = {
  border_radius: vars.unit_block_border_radius,
  padding: 3 * vars.grid_unit_component,
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  color_light_content_background: rgba(vars.color_light_background),
  color_light_title_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_body_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
  color_light_body_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",

  color_dark_content_background: rgba(vars.color_dark_background),
  color_dark_title_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_body_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
  color_dark_body_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
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

var lineHeightTitle = 24;

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, defineProperty(_ref, selector, [flex.layoutCenterCenter, {
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    // transition-duration set in js
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    "z-index": vars.z_dialog,
    height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
    padding: componentVars.padding + "px 40px",
    opacity: 0,

    "&.pe-dialog--visible": {
      opacity: 1
    },

    "&.pe-dialog--fullscreen": {
      padding: 0,

      " .pe-dialog__content": {
        "border-radius": 0,
        "max-width": "none",
        height: "100%",
        width: "100%",

        " .pe-dialog__header, .pe-dialog__footer": {
          display: "none"
        },

        " .pe-dialog__body": {
          padding: 0,
          height: "100%",
          "max-height": "calc(100%)",
          border: "none"
        }
      }
    },

    " .pe-dialog__header, pe-dialog__body, pe-dialog__header": {
      "z-index": 1
    },

    " .pe-dialog__content": [flex.layoutVertical, {
      position: "relative",
      "max-height": "100%",
      "min-width": 56 * 5 + "px",
      "max-width": 7 * vars.grid_unit_menu + "px",
      "border-radius": componentVars.border_radius + "px",

      " > .pe-shadow": {
        "z-index": -1 // For IE10 to get click events on content
      },

      "&.pe-menu__content": {
        " .pe-dialog__body": {
          padding: 0,
          border: "none"
        }
      }
    }],

    " .pe-dialog__title": {
      "font-size": vars.font_size_title + "px",
      "line-height": lineHeightTitle + "px",
      "font-weight": vars.font_weight_medium,

      "& + div": {
        "margin-top": "16px"
      }
    },

    " .pe-dialog__header": {
      padding: [componentVars.padding - 4, componentVars.padding, componentVars.header_bottom - 4, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" "),
      "min-height": componentVars.header_height + "px",

      " .pe-dialog__title": [mixin.ellipsis(1), {
        width: "100%"
      }]
    },

    " .pe-dialog__body": [flex.selfStretch, mixin.hairline("border-top"), {
      "border-top-style": "solid"
    }, mixin.hairline("border-top"), {
      "border-bottom-style": "solid"
    }, {
      padding: [componentVars.padding, componentVars.padding, componentVars.padding - 5, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" "),
      "overflow-y": "auto",
      "-webkit-overflow-scrolling": "touch",
      "border-width": "1px",
      "border-style": "solid none",
      "border-color": "transparent",
      // initially set max-height; will be overridden by dialog core with actual heights
      "max-height": "calc(100vh - " + 2 * componentVars.padding + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)"
    }],
    " .pe-dialog__header + .pe-dialog__body": {
      "padding-top": 0
    },

    " .pe-dialog__footer": {
      padding: "2px 8px",
      "min-height": componentVars.footer_height + "px",
      "font-size": 0, // remove inline block spacing

      "&.pe-dialog__footer--high": {
        // when buttons are stacked vertically
        "padding-bottom": "8px"
      }
    },

    " .pe-dialog__actions": [flex.layoutHorizontal, flex.layoutEndJustified, flex.layoutWrap, {
      margin: "0 -4px",

      " .pe-button": {
        height: "36px",
        "margin-top": "6px",
        "margin-bottom": "6px",
        padding: 0
      }
    }]
  }]), defineProperty(_ref, " body.pe-dialog--open", {
    overflow: "hidden",
    left: 0,
    "-webkit-overflow-scrolling": "touch",
    top: 0,
    width: "100%"
  }), _ref)];
});

var style = function style(scope, selector, componentVars, tint) {
  return [defineProperty({}, scope + selector, {
    "&.pe-dialog--backdrop": {
      "background-color": componentVars["color_" + tint + "_backdrop_background"]
    },
    " .pe-dialog__content": {
      "background-color": componentVars["color_" + tint + "_content_background"]
    },
    " .pe-dialog__header .pe-dialog__title": {
      "color": componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog__body": {
      "color": componentVars["color_" + tint + "_body_text"]
    },
    "&.pe-dialog--overflow-top .pe-dialog__body": {
      "border-top-color": componentVars["color_" + tint + "_body_border"]
    },
    "&.pe-dialog--overflow-bottom .pe-dialog__body": {
      "border-bottom-color": componentVars["color_" + tint + "_body_border"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme", selector, componentVars, "dark"), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var fns = [layout, color];
var selector = ".pe-dialog";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var classes = {
  component: "pe-dialog",
  visible: "pe-dialog--visible",
  body: "pe-dialog__body",
  fullscreen: "pe-dialog--fullscreen",
  content: "pe-dialog__content",
  header: "pe-dialog__header",
  footer: "pe-dialog__footer",
  footerHigh: "pe-dialog__footer--high",
  title: "pe-dialog__title",
  actions: "pe-dialog__actions",
  hasBackdrop: "pe-dialog--backdrop",
  hasTopOverflow: "pe-dialog--overflow-top",
  hasBottomOverflow: "pe-dialog--overflow-bottom",
  /* lookup: */
  menuContent: "pe-menu__content"
};

var SCROLL_WATCH_TIMER = 150;

var updateScrollState = function updateScrollState(state) {
  var scroller = state.scrollEl;
  if (!scroller) {
    return;
  }
  state.topOverflow = scroller.scrollTop > 0;
  state.bottomOverflow = scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0;
};

var updateFooterState = function updateFooterState(state) {
  var footerEl = state.footerEl;
  if (footerEl) {
    var style = window.getComputedStyle(footerEl);
    var height = footerEl.getBoundingClientRect().height;
    var minHeight = parseInt(style.minHeight, 10);
    if (height > minHeight) {
      footerEl.classList.add(classes.footerHigh);
    } else {
      footerEl.classList.remove(classes.footerHigh);
    }
  }
};

var showDialog = function showDialog(state, opts) {
  var id = state.id;
  state.isTransitioning = true;
  return show(_extends({}, opts, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
    if (state.didShow) {
      // notify multiple
      state.didShow(id);
      // this will call opts.didShow
    }
  });
};

var hideDialog = function hideDialog(state, opts) {
  var id = state.id;
  state.isTransitioning = true;
  return hide(_extends({}, opts, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    dialog.remove(id);
    state.isTransitioning = false;
    state.visible = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    setTimeout(m.redraw, 0); // removes remainder of dialog component
  });
};

var createViewContent = function createViewContent(state, opts) {
  // if flex "self-stretch" is not supported, calculate the maximum height
  var bodyOpts = opts.body || opts.menu;
  var updateContentOnScroll = opts.updateContentOnScroll || false;
  var ignoreContent = !updateContentOnScroll && state.isScrolling;
  return m("div", {
    class: classes.body,
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;
      return state.scrollEl = dom;
    },
    onbeforeupdate: !ignoreContent,
    onscroll: function onscroll() {
      state.isScrolling = true;
      updateScrollState(state);

      clearTimeout(state.scrollWatchId);
      state.scrollWatchId = setTimeout(function () {
        state.isScrolling = false;
      }, SCROLL_WATCH_TIMER);
    }
  }, bodyOpts);
};

var createView = function createView(state, opts) {
  var update = function update() {
    updateScrollState(state);
    updateFooterState(state);
    m.redraw();
  };
  var handleEscape = function handleEscape(e) {
    if (opts.fullscreen || opts.modal) return;
    if (e.which === 27 && !state.isTransitioning) {
      cleanup();
      hideDialog(state, _extends({}, opts, {
        hideDelay: 0
      }));
    }
  };
  var cleanup = function cleanup() {
    unsubscribe("resize", update);
    unsubscribe("keydown", handleEscape);
  };

  var element = opts.element || "form";
  var props = _extends({}, filterSupportedAttributes(opts), {
    style: null, // set in content
    class: [classes.component, opts.fullscreen ? classes.fullscreen : null, opts.backdrop ? classes.hasBackdrop : null, state.topOverflow || opts.borders ? classes.hasTopOverflow : null, state.bottomOverflow || opts.borders ? classes.hasBottomOverflow : null, state.visible ? classes.visible : null, opts.class].join(" "),
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      state.el = dom;
      // resize: update scroll state ("overflow" borders)
      subscribe("resize", update);
      subscribe("keydown", handleEscape);

      updateScrollState(state);

      showDialog(state, opts).then(function () {
        updateScrollState(state);
        updateFooterState(state);
        if (state.topOverflow || state.bottomOverflow) {
          setTimeout(m.redraw, 0);
        }
      });
    },
    onremove: cleanup,
    // click backdrop: close dialog
    onclick: function onclick(e) {
      if (e.target !== state.el) {
        return;
      }
      if (opts.modal) {
        // not allowed
        return;
      }
      if (!state.isTransitioning) {
        hideDialog(state, opts);
      }
    }
  }, opts.formOptions ? opts.formOptions : null);

  var body = createViewContent(state, opts);
  var content = m("div", {
    class: [classes.content, opts.menu ? classes.menuContent : null].join(" "),
    style: opts.style
  }, [opts.fullscreen ? null : m(shadow, {
    z: state.z,
    animated: true
  }), opts.fullscreen ? null : opts.title ? m("div", {
    class: classes.header,
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;

      state.headerHeight = dom.scrollHeight;
    }
  }, m("div", {
    class: classes.title
  }, opts.title)) : null, body, opts.fullscreen ? null : opts.footer ? m("div", {
    class: classes.footer,
    oncreate: function oncreate(_ref4) {
      var dom = _ref4.dom;

      state.footerHeight = dom.scrollHeight;
      state.footerEl = dom;
      updateFooterState(state);
    },
    onupdate: function onupdate(_ref5) {
      var dom = _ref5.dom;
      return state.footerHeight = dom.scrollHeight, updateFooterState(state);
    }
  }, [m("div", {
    class: classes.actions
  }, opts.footer)]) : null]);

  return m(element, props, [opts.before, content, opts.after]);
};

var instance = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    var opts = attrs.opts;
    var z = opts.z !== undefined ? opts.z : 3; // shadow depth
    vnode.state = _extends(vnode.state, attrs, {
      id: attrs.instanceId,
      z: z,
      scrollEl: undefined,
      footerEl: undefined,
      topOverflow: false,
      bottomOverflow: false,
      scrollWatchId: 0,
      isScrolling: false,
      headerHeight: 0,
      footerHeight: 0,
      el: undefined,
      visible: false,
      isTransitioning: false
    });
  },
  view: function view(_ref6) {
    var state = _ref6.state,
        attrs = _ref6.attrs;

    // attrs contains {id, opts}
    var opts = typeof attrs.opts === "function" ? attrs.opts() : attrs.opts;
    if (attrs.hide && !state.isTransitioning) {
      hideDialog(state, opts);
    }
    return createView(state, opts);
  }
};

var dialog = multiple({
  instance: instance,
  defaultId: "default_dialog",
  element: ".pe-dialog__holder",
  placeholder: "span.pe-dialog__placeholder",
  bodyShowClass: "pe-dialog--open"
});

export { dialog, vars$1 as vars };
