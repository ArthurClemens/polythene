import m from 'mithril';
import { shadow } from 'polythene-shadow';
import { filterSupportedAttributes, hide, show, subscribe, unsubscribe } from 'polythene-core';
import { styler } from 'polythene-css';
import { vars } from 'polythene-theme';

var rgba = vars.rgba;

var vars$1 = {
  sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size: 1.5,
  max_size_small_screen: 5,
  size_factor: vars.grid_unit_menu,
  border_radius: vars.unit_block_border_radius,

  color_light_background: rgba(vars.color_light_background),
  color_dark_background: rgba(vars.color_dark_background)
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

var unifySize$1 = function unifySize(componentVars, size) {
  return size < componentVars.min_size ? componentVars.min_size : size;
};

var widthClass$1 = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

var widthStyle = function widthStyle(componentVars, size) {
  var s = unifySize$1(componentVars, size);
  return defineProperty({}, "&." + widthClass$1(s), {
    width: componentVars.size_factor * s + "px",
    "max-width": "100%"
  });
};
var layout = (function (selector, componentVars) {
  return [defineProperty({}, selector, [componentVars.sizes.map(function (size) {
    return widthStyle(componentVars, size);
  }), defineProperty({
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    zIndex: vars.z_menu,
    opacity: 0,
    position: "absolute",
    width: "100%",
    minWidth: vars.grid_unit_menu * componentVars.min_size + "px",

    "&.pe-menu--width-auto": {
      width: "auto"
    },

    "&.pe-menu--visible": {
      opacity: 1
    },

    "&.pe-menu--permanent": {
      position: "relative",
      opacity: 1
    },

    " .pe-menu__content": {
      width: "100%",
      borderRadius: componentVars.border_radius + "px"
    }

  }, "@media (max-width: " + vars.unit_screen_size_large + "px)", {
    "max-width": componentVars.max_size_small_screen * vars.grid_unit_menu + "px"
  })])];
});

var style = function style(scope, selector, componentVars, tint) {
  return [defineProperty({}, scope + selector, {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme", selector, componentVars, "dark"), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var fns = [layout, color];
var selector = ".pe-menu";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var classes = {
  component: "pe-menu",
  content: "pe-menu__content",
  placeholder: "pe-menu--placeholder",
  visible: "pe-menu--visible",
  permanent: "pe-menu--permanent",
  target: "pe-menu--target",
  width_n: "pe-menu--width-",
  width_auto: "pe-menu--width-auto",

  // lookup
  listTile: "pe-list-tile",
  selectedListTile: "pe-list-tile--selected"
};

var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(state, opts) {
  if (!opts.target) {
    return;
  }
  var targetEl = document.querySelector("#" + opts.target);
  if (!targetEl) {
    return;
  }
  var offsetH = opts.offset !== undefined ? opts.offset : DEFAULT_OFFSET_H;
  var menuEl = state.el;
  if (!menuEl) {
    return;
  }
  var contentEl = state.contentEl;
  var origin = opts.origin || "top-left";
  var reposition = opts.reposition === false ? false : true;
  var positionOffset = 0;
  if (reposition) {
    var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];
    var selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      var firstItemRect = firstItem.getBoundingClientRect();
      var selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffset = selectedItemRect.top - firstItemRect.top;
    }
    // align to middle of target
    var alignEl = selectedItem || firstItem;
    var alignRect = alignEl.getBoundingClientRect();
    var _targetRect = targetEl.getBoundingClientRect();
    var heightDiff = alignRect.height - _targetRect.height;
    positionOffset += heightDiff / 2;
  }
  var targetRect = targetEl.getBoundingClientRect();
  var parentRect = menuEl.parentNode.getBoundingClientRect();
  var alignLeft = function alignLeft() {
    return menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
  };
  var alignRight = function alignRight() {
    return menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
  };
  var alignTop = function alignTop() {
    return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + "px";
  };
  var alignBottom = function alignBottom() {
    return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + "px";
  };
  var alignFn = {
    "top-left": function topLeft() {
      return alignTop() && alignLeft();
    },
    "top-right": function topRight() {
      return alignTop() && alignRight();
    },
    "bottom-left": function bottomLeft() {
      return alignBottom() && alignLeft();
    },
    "bottom-right": function bottomRight() {
      return alignBottom() && alignRight();
    }
  };
  alignFn[origin].call();
};

var showMenu = function showMenu(state, opts) {
  state.isTransitioning = true;
  return show(_extends({}, opts, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
    if (opts.didShow) {
      opts.didShow(opts.id);
    }
  });
};

var hideMenu = function hideMenu(state, opts) {
  state.isTransitioning = true;
  return hide(_extends({}, opts, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = false;
    if (opts.didHide) {
      opts.didHide(opts.id);
    }
    m.redraw(); // removes remainder of drawn component
  });
};

var unifySize = function unifySize(size) {
  return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return classes.width_n + sizeStr;
};

var createView = function createView(state, opts) {
  var listenEl = document.body;

  var activateDismissTap = function activateDismissTap() {
    listenEl.addEventListener("click", handleDismissTap);
  };

  var deActivateDismissTap = function deActivateDismissTap() {
    listenEl.removeEventListener("click", handleDismissTap);
  };

  var handleDismissTap = function handleDismissTap(e) {
    if (e.target === state.el) {
      return;
    }
    deActivateDismissTap();
    if (e.defaultPrevented) {
      // clicked on .pe-menu__content
      hideMenu(state, opts);
    } else {
      hideMenu(state, _extends({}, opts, {
        hideDelay: 0
      }));
    }
  };

  var update = function update() {
    positionMenu(state, opts);
    m.redraw();
  };

  var handleEscape = function handleEscape(e) {
    if (e.which === 27) {
      hideMenu(state, _extends({}, opts, {
        hideDelay: 0
      }));
    }
  };

  var element = opts.element || "div";
  var props = _extends({}, filterSupportedAttributes(opts), {
    class: [classes.component, opts.permanent ? classes.permanent : null, opts.target ? classes.target : "layout center-center", opts.size ? widthClass(unifySize(opts.size)) : null, opts.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      if (!opts.permanent) {
        subscribe("resize", update);
        subscribe("keydown", handleEscape);
        setTimeout(function () {
          activateDismissTap();
          showMenu(state, opts);
        }, 0);
      }
      positionMenu(state, opts);
    },
    onremove: function onremove() {
      unsubscribe("resize", update);
      unsubscribe("keydown", handleEscape);
      if (!opts.permanent) {
        deActivateDismissTap();
      }
    }
  });
  var content = m("div", {
    class: classes.content,
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;
      return state.contentEl = dom;
    },
    onclick: function onclick(e) {
      return e.preventDefault();
    }
  }, [m(shadow, {
    z: state.z,
    animated: true
  }), opts.content ? opts.content : null]);
  return m(element, props, [opts.before, content, opts.after]);
};

var menu = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    vnode.state = _extends(vnode.state, {
      z: attrs.z !== undefined ? attrs.z : 1,
      el: null,
      contentEl: null,
      isTransitioning: false,
      visible: attrs.permanent || false
    });
  },
  view: function view(_ref3) {
    var state = _ref3.state,
        attrs = _ref3.attrs;

    if (attrs.show) {
      state.visible = true;
    }
    if (state.visible) {
      return createView(state, attrs);
    } else {
      return m("span", {
        class: classes.placeholder
      });
    }
  }
};

export { menu, vars$1 as vars };
