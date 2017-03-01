import m from 'mithril';
import shadow from 'polythene-shadow';
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
  // text colors are set by content, usually list tiles
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unifySize$1 = function unifySize(componentVars, size) {
  return size < componentVars.min_size ? componentVars.min_size : size;
};

var widthClass$1 = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

var widthStyle = function widthStyle(componentVars, size) {
  var s = unifySize$1(componentVars, size);
  return _defineProperty({}, "&." + widthClass$1(s), {
    width: componentVars.size_factor * s + "px",
    "max-width": "100%"
  });
};
var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [componentVars.sizes.map(function (size) {
    return widthStyle(componentVars, size);
  }), _defineProperty({
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
      opacity: 1,
      zIndex: 0
    },

    " .pe-menu__content": {
      width: "100%",
      borderRadius: componentVars.border_radius + "px"
    }

  }, "@media (max-width: " + vars.unit_screen_size_large + "px)", {
    "max-width": componentVars.max_size_small_screen * vars.grid_unit_menu + "px"
  })])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme", selector, componentVars, "dark"), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-menu";

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-menu",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",
  visible: "pe-menu--visible",
  permanent: "pe-menu--permanent",
  width_n: "pe-menu--width-",
  width_auto: "pe-menu--width-auto",

  // lookup
  listTile: "pe-list-tile",
  selectedListTile: "pe-list-tile--selected"
};

var SHADOW_Z = 1;
var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(state, attrs) {
  if (!attrs.target) {
    return;
  }
  var targetEl = document.querySelector("#" + attrs.target);
  if (!targetEl) {
    return;
  }
  var offsetH = attrs.offset !== undefined ? attrs.offset : DEFAULT_OFFSET_H;
  var menuEl = state.el;
  if (!menuEl) {
    return;
  }
  var contentEl = state.el.querySelector("." + classes.content);
  var origin = attrs.origin || "top-left";
  var reposition = attrs.reposition === false ? false : true;
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
  if (menuEl.parentNode) {
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
  }
};

var showMenu = function showMenu(state, attrs) {
  state.isTransitioning = true;
  return show(_extends({}, attrs, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
  });
};

var hideMenu = function hideMenu(state, attrs) {
  state.isTransitioning = true;
  return hide(_extends({}, attrs, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = false;
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    m.redraw(); // removes remainder of drawn component
  });
};

var unifySize = function unifySize(size) {
  return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var createView = function createView(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
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
      hideMenu(state, attrs);
    } else {
      hideMenu(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  var update = function update() {
    positionMenu(state, attrs);
    m.redraw();
  };

  var handleEscape = function handleEscape(e) {
    if (e.which === 27) {
      hideMenu(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  var element = attrs.element || "div";
  var props = _extends({}, filterSupportedAttributes(attrs), {
    class: [classes.component, attrs.permanent ? classes.permanent : null, attrs.target ? classes.target : null, attrs.size ? widthClass(unifySize(attrs.size)) : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      if (!attrs.permanent) {
        subscribe("resize", update);
        subscribe("keydown", handleEscape);
        setTimeout(function () {
          activateDismissTap();
          showMenu(state, attrs);
        }, 0);
      }
      positionMenu(state, attrs);
    },
    onremove: function onremove() {
      unsubscribe("resize", update);
      unsubscribe("keydown", handleEscape);
      if (!attrs.permanent) {
        deActivateDismissTap();
      }
    }
  });
  var content = m("div", {
    class: classes.content,
    onclick: function onclick(e) {
      return e.preventDefault();
    }
  }, [state.z > 0 && m(shadow, {
    z: state.z,
    animated: true
  }), attrs.content ? attrs.content : vnode.children]);
  return m(element, props, [attrs.before, content, attrs.after]);
};

var menu = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    vnode.state = _extends(vnode.state, {
      z: attrs.z !== undefined ? attrs.z : SHADOW_Z,
      el: null,
      isTransitioning: false,
      visible: attrs.permanent || false
    });
  },
  view: function view(vnode) {
    if (vnode.attrs.show) {
      vnode.state.visible = true;
    }
    return vnode.state.visible ? createView(vnode) : m("span", {
      class: classes.placeholder
    });
  }
};

export { classes, vars$1 as vars };export default menu;
