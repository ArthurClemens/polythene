import { filterSupportedAttributes, subscribe, unsubscribe, transitionComponent, isServer, pointerEndMoveEvent, deprecation, stylePropCompare } from 'polythene-core';

var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-menu",

  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",

  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var DEFAULT_OFFSET_H = 0;
var DEFAULT_OFFSET_V = "79%";
var DEFAULT_TYPE = "floating";
var MIN_WIDTH = 1.5;
var DEFAULT_SHADOW_DEPTH = 1;

var isTopMenu = function isTopMenu(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs;
  return attrs.topMenu || stylePropCompare({
    element: state.dom(),
    pseudoSelector: ":before",
    prop: "content",
    contains: "\"" + "top_menu" + "\""
  });
};

var positionMenu = function positionMenu(state, attrs) {
  if (isServer) {
    return;
  }
  if (!attrs.target) {
    return;
  }
  var targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  var panelEl = state.panelEl;
  if (!panelEl) {
    return;
  }

  // Don't set the position or top offset if the menu position is fixed
  var hasStylePositionFixed = stylePropCompare({
    element: panelEl,
    prop: "position",
    equals: "fixed"
  });

  if (hasStylePositionFixed && !isTopMenu({ state: state, attrs: attrs })) {
    _extends(panelEl.style, {});
    panelEl.offsetHeight; // force reflow
    return;
  }

  var contentEl = state.contentEl;
  var parentRect = panelEl.parentNode.getBoundingClientRect();
  var targetRect = targetEl.getBoundingClientRect();
  var attrsOffsetH = attrs.offsetH !== undefined ? attrs.offsetH : attrs.offset !== undefined ? attrs.offset // deprecated
  : DEFAULT_OFFSET_H;
  var attrsOffsetV = attrs.offsetV !== undefined ? attrs.offsetV : DEFAULT_OFFSET_V;
  var offsetH = attrsOffsetH.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetH) * 0.01 * targetRect.width) : Math.round(parseFloat(attrsOffsetH));
  var offsetV = attrsOffsetV.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetV) * 0.01 * targetRect.height) : Math.round(parseFloat(attrsOffsetV));
  var positionOffsetV = offsetV;

  var attrsOrigin = attrs.origin || "top";
  var origin = attrsOrigin.split(/\W+/).reduce(function (acc, curr) {
    return acc[curr] = true, acc;
  }, {});

  var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];

  if (attrs.reposition) {
    // get the first List Tile to calculate the top position  
    var selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      var firstItemRect = firstItem.getBoundingClientRect();
      var selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffsetV = firstItemRect.top - selectedItemRect.top;
    }
    // align to middle of target
    var alignEl = selectedItem || firstItem;
    var alignRect = alignEl.getBoundingClientRect();
    var _targetRect = targetEl.getBoundingClientRect();
    var heightDiff = _targetRect.height - alignRect.height;
    positionOffsetV += Math.abs(heightDiff) / 2;
  } else if (attrs.origin && !hasStylePositionFixed) {
    if (origin.top) {
      positionOffsetV += targetRect.top - parentRect.top;
    } else if (origin.bottom) {
      positionOffsetV += targetRect.top - parentRect.bottom;
    }
  }

  if (attrs.height) {
    var firstItemHeight = firstItem ? firstItem.clientHeight : 48; // default List Tile height
    if (attrs.height === "max") {
      var topMargin = positionOffsetV;
      var bottomMargin = firstItemHeight;
      panelEl.style.height = "calc(100% - " + (topMargin + bottomMargin) + "px)";
    } else {
      var height = /^\d+$/.test(attrs.height.toString()) ? attrs.height + "px" : attrs.height;
      panelEl.style.height = height;
    }
  }

  // prevent animated changes
  var transitionDuration = panelEl.style.transitionDuration;
  panelEl.style.transitionDuration = "0ms";

  if (panelEl.parentNode && !hasStylePositionFixed) {
    if (origin.right) {
      panelEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    } else {
      panelEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    }
    if (origin.bottom) {
      panelEl.style.bottom = positionOffsetV + "px";
    } else {
      panelEl.style.top = positionOffsetV + "px";
    }
    panelEl.style.transformOrigin = attrsOrigin.split(/\W+/).join(" ");
  }

  panelEl.offsetHeight; // force reflow
  panelEl.style.transitionDuration = transitionDuration;
};

var scrollContent = function scrollContent(state, attrs) {
  if (isServer) {
    return;
  }
  if (!attrs.scrollTarget) {
    return;
  }
  var scrollTargetEl = document.querySelector(attrs.scrollTarget);
  if (!scrollTargetEl) {
    return;
  }
  state.contentEl.scrollTop = scrollTargetEl.offsetTop;
};

var transitionOptions = function transitionOptions(state, attrs, isShow) {
  return {
    state: state,
    attrs: attrs,
    isShow: isShow,
    beforeTransition: isShow ? function () {
      return state.update();
    } : null,
    domElements: {
      el: state.panelEl,
      showClassElement: state.dom()
    },
    showClass: classes.visible
  };
};

var showMenu = function showMenu(state, attrs) {
  return transitionComponent(transitionOptions(state, attrs, true));
};

var hideMenu = function hideMenu(state, attrs) {
  return transitionComponent(transitionOptions(state, attrs, false));
};

var unifyWidth = function unifyWidth(width) {
  return width < MIN_WIDTH ? MIN_WIDTH : width;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var handleSubscriptions = function handleSubscriptions(vnode, which) {
  var state = vnode.state;
  var attrs = vnode.attrs;

  if (which === "mount") {
    subscribe("resize", state.update);
    subscribe("keydown", state.handleEscape);
    setTimeout(function () {
      state.activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else {
    unsubscribe("resize", state.update);
    unsubscribe("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream(null);
  var attrs = vnode.attrs;
  if (attrs.offset !== undefined) {
    deprecation("Menu", "offset", "offsetH");
  }
  if (attrs.size !== undefined) {
    deprecation("Menu", "size", "width");
  }
  var visible = createStream(false);
  var transitioning = createStream(false);
  return {
    dom: dom,
    visible: visible,
    transitioning: transitioning,
    activateDismissTap: undefined, // set in onMount
    contentEl: undefined, // set in onMount
    deActivateDismissTap: undefined, // set in onMount
    handleDismissTap: undefined, // set in onMount
    handleEscape: undefined, // set in onMount
    panelEl: undefined, // set in onMount
    update: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([transitioning])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);
  state.panelEl = vnode.dom.querySelector("." + classes.panel);
  state.contentEl = vnode.dom.querySelector("." + classes.content);

  if (!attrs.permanent) {
    state.handleDismissTap = function (e) {
      if (e.target === state.panelEl) {
        return;
      }
      hideMenu(state, attrs);
    };

    state.update = function () {
      positionMenu(state, attrs);
      scrollContent(state, attrs);
    };

    state.activateDismissTap = function () {
      pointerEndMoveEvent.forEach(function (evt) {
        return document.addEventListener(evt, state.handleDismissTap);
      });
    };

    state.deActivateDismissTap = function () {
      pointerEndMoveEvent.forEach(function (evt) {
        return document.removeEventListener(evt, state.handleDismissTap);
      });
    };

    state.handleEscape = function (e) {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu(state, _extends({}, attrs, { hideDelay: 0 }));
      }
    };

    handleSubscriptions(vnode, "mount");
  }
};

var onUnMount = function onUnMount(vnode) {
  var attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var attrs = vnode.attrs;
  var type = attrs.type || DEFAULT_TYPE;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.permanent ? classes.permanent : null, attrs.origin ? classes.origin : null, attrs.backdrop ? classes.showBackdrop : null, attrs.topMenu ? classes.isTopMenu : null, type === "floating" && !attrs.permanent ? classes.floating : null, attrs.width || attrs.size ? widthClass(unifyWidth(attrs.width || attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      Shadow = _ref3.Shadow;

  var attrs = vnode.attrs;
  var shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z !== undefined ? attrs.z // deprecated
  : DEFAULT_SHADOW_DEPTH;
  return [h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", {
    className: classes.panel,
    key: "panel"
  }, [h(Shadow, {
    shadowDepth: shadowDepth,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    style: attrs.style,
    key: "content"
  }, attrs.content ? attrs.content : vnode.children)])];
};

var menu = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createContent: createContent
});

export { menu as coreMenu };
