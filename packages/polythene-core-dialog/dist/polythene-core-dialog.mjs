import { deprecation, unsubscribe, subscribe, transitionComponent, filterSupportedAttributes, stylePropCompare } from 'polythene-core';

function _defineProperty(obj, key, value) {
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
}

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
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var menuClasses = {
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

var classes = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};

var DEFAULT_SHADOW_DEPTH = 3;
var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var isFullScreen = function isFullScreen(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs;
  return attrs.fullScreen || stylePropCompare({
    element: state.el,
    pseudoSelector: ":before",
    prop: "content",
    contains: "\"".concat("full_screen", "\"")
  });
};

var isModal = function isModal(_ref2) {
  var state = _ref2.state,
      attrs = _ref2.attrs;
  return attrs.modal || stylePropCompare({
    element: state.el,
    pseudoSelector: ":before",
    prop: "content",
    contains: "\"".concat("modal", "\"")
  });
};

var transitionOptions = function transitionOptions(state, attrs, isShow) {
  return {
    isTransitioning: state.transitioning(),
    setIsTransitioning: state.transitioning,
    setIsVisible: state.visible,
    instanceId: state.instanceId,
    attrs: attrs,
    isShow: isShow,
    domElements: {
      el: state.el,
      contentEl: state.contentEl,
      backdropEl: state.backdropEl
    },
    showClass: classes.visible,
    transitionClass: classes.transition
  };
};

var showDialog = function showDialog(state, attrs) {
  return transitionComponent(transitionOptions(state, attrs, true));
};

var hideDialog = function hideDialog(state, attrs) {
  return transitionComponent(transitionOptions(state, attrs, false));
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  var visible = createStream(false);
  return {
    backdropEl: undefined,
    touchEl: undefined,
    cleanUp: undefined,
    el: undefined,
    contentEl: undefined,
    transitioning: transitioning,
    visible: visible,
    redrawOnUpdate: createStream.merge([transitioning])
  };
};
var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }

  var state = vnode.state;
  var attrs = vnode.attrs;

  if (attrs.z !== undefined) {
    deprecation("Dialog", {
      option: "z",
      newOption: "shadowDepth"
    });
  }

  var dom = vnode.dom;
  state.el = dom;
  state.backdropEl = dom.querySelector(".".concat(classes.backdrop));
  state.touchEl = dom.querySelector(".".concat(classes.touch));
  state.contentEl = dom.querySelector(".".concat(classes.content));

  if (!attrs.inactive) {
    // used by Drawer
    var handleEscape = function handleEscape(e) {
      if (isFullScreen(vnode) || isModal(vnode)) return;

      if (e.key === "Escape" || e.key === "Esc") {
        // "Esc" for IE11
        var openDialogs = document.querySelectorAll(".".concat(classes.component));

        if (openDialogs[openDialogs.length - 1] === state.el) {
          hideDialog(state, _extends({}, attrs, {
            hideDelay: 0
          }));
        }
      }
    };

    state.cleanUp = function () {
      return unsubscribe("keydown", handleEscape);
    };

    subscribe("keydown", handleEscape);

    if (attrs.show) {
      showDialog(state, attrs);
    }
  }
};
var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp && vnode.state.cleanUp();
};
var createProps = function createProps(vnode, _ref3) {
  var k = _ref3.keys;
  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  attrs.testId && {
    "data-test-id": attrs.testId
  }, _defineProperty({
    className: [attrs.parentClassName || classes.component, attrs.fromMultipleClassName, attrs.fullScreen ? classes.fullScreen : null, attrs.modal ? classes.modal : null, attrs.backdrop ? classes.showBackdrop : null, // classes.visible is set in showDialog though transition
    attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" "),
    "data-spawn-id": attrs.spawnId,
    // received from Multi
    "data-instance-id": attrs.instanceId
  }, k.onclick, function (e) {
    if (e.target !== state.el && e.target !== state.backdropEl && e.target !== state.touchEl) {
      return;
    }

    if (isModal(vnode)) {
      // not allowed
      return;
    }

    hideDialog(state, attrs);
  }));
};
var createPane = function createPane(vnode, _ref4) {
  var h = _ref4.renderer,
      Pane = _ref4.Pane;
  var attrs = vnode.attrs;
  return h(Pane, {
    body: attrs.content || attrs.body || attrs.menu || vnode.children,
    borders: attrs.borders,
    className: attrs.className,
    footer: attrs.footer,
    footerButtons: attrs.footerButtons,
    formOptions: attrs.formOptions,
    fullBleed: attrs.fullBleed,
    header: attrs.header,
    style: attrs.style,
    title: attrs.title
  });
};
var createContent = function createContent(vnode, _ref5) {
  var renderer = _ref5.renderer,
      Shadow = _ref5.Shadow,
      createPane = _ref5.createPane,
      Pane = _ref5.Pane;
  var state = vnode.state;
  var attrs = vnode.attrs;
  var h = renderer;

  if (state.el) {
    var visible = state.visible();
    var transitioning = state.transitioning();

    if (!transitioning) {
      if (attrs.hide && visible) {
        // Use setTimeout to play nice with React's lifecycle functions
        setTimeout(function () {
          return hideDialog(state, attrs);
        }, 0);
      } else if (attrs.show && !visible) {
        setTimeout(function () {
          return showDialog(state, attrs);
        }, 0);
      }
    }
  }

  var pane = attrs.panesOptions && attrs.panesOptions.length ? h(Pane, attrs.panesOptions[0]) : attrs.panes && attrs.panes.length ? attrs.panes[0] : createPane(vnode, {
    renderer: renderer,
    Pane: Pane
  });
  var shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z; // deprecated

  return [h("div", {
    key: "backdrop",
    className: classes.backdrop
  }), h("div", {
    key: "touch",
    className: classes.touch
  }), h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    key: "content"
  }, [attrs.fullScreen ? null : h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : DEFAULT_SHADOW_DEPTH,
    animated: true,
    key: "shadow"
  }), pane])];
};

var dialog = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  onMount: onMount,
  onUnMount: onUnMount,
  createProps: createProps,
  createPane: createPane,
  createContent: createContent
});

export { dialog as coreDialog };
