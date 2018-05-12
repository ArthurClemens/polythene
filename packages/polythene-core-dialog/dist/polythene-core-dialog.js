(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core'), require('polythene-theme')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core', 'polythene-theme'], factory) :
  (factory((global.polythene = {}),global['polythene-core'],global['polythene-theme']));
}(this, (function (exports,polytheneCore,polytheneTheme) { 'use strict';

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

  var menuClasses = {
    component: "pe-menu",

    // elements
    content: "pe-menu__content",
    placeholder: "pe-menu__placeholder",
    target: "pe-menu__target",

    // states
    permanent: "pe-menu--permanent",
    fullHeight: "pe-menu--full-height",
    floating: "pe-menu--floating",
    visible: "pe-menu--visible",
    width_auto: "pe-menu--width-auto",
    width_n: "pe-menu--width-",

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
    open: "pe-dialog--open", // class set to html element
    visible: "pe-dialog--visible", // class set to dialog element

    // lookup
    menuContent: menuClasses.content
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var DEFAULT_Z = 3;

  var getElement = function getElement(vnode) {
    return vnode.attrs.element || "div";
  };

  var transitionOptions = function transitionOptions(state, attrs, isShow) {
    return {
      state: state,
      attrs: attrs,
      isShow: isShow,
      domElements: {
        el: state.el,
        contentEl: state.contentEl,
        backdropEl: state.backdropEl
      },
      showClass: classes.visible
    };
  };

  var showDialog = function showDialog(state, attrs) {
    return polytheneCore.transitionComponent(transitionOptions(state, attrs, true));
  };

  var hideDialog = function hideDialog(state, attrs) {
    return polytheneCore.transitionComponent(transitionOptions(state, attrs, false));
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
    var dom = vnode.dom;
    state.el = dom;
    state.backdropEl = dom.querySelector("." + classes.backdrop);
    state.touchEl = dom.querySelector("." + classes.touch);
    state.contentEl = dom.querySelector("." + classes.content);

    if (!attrs.inactive) {

      var handleEscape = function handleEscape(e) {
        if (attrs.fullScreen || attrs.modal) return;
        if (e.key === "Escape" || e.key === "Esc") {
          // "Esc" for IE11
          var openDialogs = document.querySelectorAll("." + classes.component);
          if (openDialogs[openDialogs.length - 1] === state.el) {
            hideDialog(state, _extends({}, attrs, {
              hideDelay: 0
            }));
          }
        }
      };

      state.cleanUp = function () {
        return polytheneCore.unsubscribe("keydown", handleEscape);
      };

      polytheneCore.subscribe("keydown", handleEscape);

      if (attrs.show) {
        showDialog(state, attrs);
      }
    }
  };

  var onUnMount = function onUnMount(vnode) {
    return vnode.state.cleanUp && vnode.state.cleanUp();
  };

  var createProps = function createProps(vnode, _ref) {
    var k = _ref.keys;

    var state = vnode.state;
    var attrs = vnode.attrs;

    return _extends({}, polytheneCore.filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
    _defineProperty({
      className: [attrs.parentClassName || classes.component, attrs.fullScreen ? classes.fullScreen : null,
      // classes.visible is set in showDialog though transition
      attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" "),
      "data-spawn-id": attrs.spawnId,
      "data-instance-id": attrs.instanceId
    }, k.onclick, function (e) {
      if (e.target !== state.el && e.target !== state.backdropEl && e.target !== state.touchEl) {
        return;
      }
      if (attrs.modal) {
        // not allowed
        return;
      }
      hideDialog(state, attrs);
    }));
  };

  var createPane = function createPane(vnode, _ref2) {
    var h = _ref2.renderer,
        Pane = _ref2.Pane;

    var attrs = vnode.attrs;
    return h(Pane, {
      title: attrs.title,
      header: attrs.header,
      body: attrs.content || attrs.body || attrs.menu || vnode.children,
      footer: attrs.footer,
      footerButtons: attrs.footerButtons,
      className: attrs.className,
      style: attrs.style,
      fullBleed: attrs.fullBleed,
      formOptions: attrs.formOptions
    });
  };

  var createContent = function createContent(vnode, _ref3) {
    var renderer = _ref3.renderer,
        Shadow = _ref3.Shadow,
        createPane = _ref3.createPane,
        Pane = _ref3.Pane;

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
    var pane = attrs.panesOptions && attrs.panesOptions.length ? h(Pane, attrs.panesOptions[0]) : attrs.panes && attrs.panes.length ? attrs.panes[0] : createPane(vnode, { renderer: renderer, Pane: Pane });
    return [attrs.backdrop && h("div", {
      key: "backdrop",
      className: classes.backdrop
    }), h("div", {
      key: "touch",
      className: classes.touch
    }), h("div", {
      className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
      key: "content"
    }, [attrs.fullScreen ? null : h(Shadow, {
      z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
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

  var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return "rgba(" + colorStr + ", " + opacity + ")";
  };

  var vars = {
    general_styles: true,

    animation_delay: "0s",
    animation_duration: ".220s",
    animation_hide_css: "opacity: 0;",
    animation_show_css: "opacity: 1;",
    animation_timing_function: "ease-in-out",
    border_radius: polytheneTheme.vars.unit_block_border_radius,
    padding_horizontal: 5 * polytheneTheme.vars.grid_unit_component,
    padding_vertical: 3 * polytheneTheme.vars.grid_unit_component,
    position: "fixed",

    color_light_backdrop_background: "rgba(0, 0, 0, .4)",
    color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

    color_light_background: rgba(polytheneTheme.vars.color_light_background),
    color_dark_background: rgba(polytheneTheme.vars.color_dark_background),

    color_light_text: rgba(polytheneTheme.vars.color_light_foreground, polytheneTheme.vars.blend_light_text_regular),
    color_dark_text: rgba(polytheneTheme.vars.color_dark_foreground, polytheneTheme.vars.blend_dark_text_regular)
  };

  exports.coreDialog = dialog;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-dialog.js.map
