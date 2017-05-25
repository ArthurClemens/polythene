import { filterSupportedAttributes, hide, show, subscribe, unsubscribe } from 'polythene-core';
import { mixin, styler } from 'polythene-core-css';
import { CoreListTile } from 'polythene-core-list-tile';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: CoreListTile.classes.component,
  selectedListTile: CoreListTile.classes.selected
};

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

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unifySize$1 = function unifySize(componentVars, size) {
  return size < componentVars.min_size ? componentVars.min_size : size;
};

var widthClass$1 = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

var widthStyle = function widthStyle(componentVars, size) {
  var s = unifySize$1(componentVars, size);
  return _defineProperty$1({}, "&." + widthClass$1(s), {
    width: componentVars.size_factor * s + "px",
    "max-width": "100%"
  });
};

var layout = (function (selector, componentVars) {
  var _ref3;

  return [(_ref3 = {}, _defineProperty$1(_ref3, selector, [componentVars.sizes.map(function (size) {
    return widthStyle(componentVars, size);
  }), _defineProperty$1({
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
  })]), _defineProperty$1(_ref3, " .pe-menu__content", {
    " .pe-list-tile__title": [mixin.ellipsis("none")]
  }), _ref3)];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$2({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

styler.generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var element = "div";

var theme = customTheme;

var SHADOW_Z = 1;
var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(state, attrs) {
  var targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  var offsetH = attrs.offset !== undefined ? attrs.offset : DEFAULT_OFFSET_H;
  var menuEl = state.dom;
  if (!menuEl) {
    return;
  }
  var contentEl = state.dom.querySelector("." + classes.content);
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
  attrs.setTransitioning(true);
  return show(_extends({}, attrs, {
    el: state.dom,
    showClass: classes.visible
  })).then(function () {
    attrs.setTransitioning(false);
    attrs.setVisible(true);
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
  });
};

var hideMenu = function hideMenu(state, attrs) {
  attrs.setTransitioning(true);
  return hide(_extends({}, attrs, {
    el: state.dom,
    showClass: classes.visible
  })).then(function () {
    attrs.setTransitioning(false);
    attrs.setVisible(false);
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
  });
};

var unifySize = function unifySize(size) {
  return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.permanent ? classes.permanent : null, attrs.target ? classes.target : null, attrs.size ? widthClass(unifySize(attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var handleSubscriptions = function handleSubscriptions(vnode, which) {
  var state = vnode.state;
  var attrs = vnode.attrs;

  var update = function update() {
    positionMenu(state, attrs);
  };

  var handleDismissTap = function handleDismissTap(e) {
    if (e.target === state.dom) {
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

  var listenEl = document.body;

  var activateDismissTap = function activateDismissTap() {
    listenEl.addEventListener("click", handleDismissTap);
  };

  var deActivateDismissTap = function deActivateDismissTap() {
    listenEl.removeEventListener("click", handleDismissTap);
  };

  var handleEscape = function handleEscape(e) {
    if (e.which === 27) {
      hideMenu(state, _extends({}, attrs, { hideDelay: 0 }));
    }
  };

  if (which === "mount") {
    subscribe("resize", update);
    subscribe("keydown", handleEscape);
    setTimeout(function () {
      activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else if (which === "unmount") {
    unsubscribe("resize", update);
    unsubscribe("keydown", handleEscape);
    deActivateDismissTap();
  }
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom = vnode.dom;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "mount");
  }
  positionMenu(state, attrs);
};

var onUnMount = function onUnMount(vnode) {
  var attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

var createContent = function createContent(vnode, _ref2) {
  var _h;

  var h = _ref2.renderer,
      k = _ref2.keys,
      Shadow = _ref2.Shadow;

  var attrs = vnode.attrs;
  var z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return h("div", (_h = {
    className: classes.content
  }, _defineProperty(_h, k.onclick, function (e) {
    return e.preventDefault();
  }), _defineProperty(_h, "style", attrs.style), _h), [z > 0 && h(Shadow, {
    z: z,
    animated: true
  }), attrs.content ? attrs.content : vnode.children]);
};

var CoreMenu = {
  theme: theme, element: element, classes: classes, vars: vars$1,
  createProps: createProps, createContent: createContent,
  onMount: onMount, onUnMount: onUnMount
};

export { CoreMenu };
