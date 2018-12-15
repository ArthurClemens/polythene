(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-text-button",
    super: "pe-button",
    row: "pe-button-row",
    // elements      
    content: "pe-button__content",
    label: "pe-button__label",
    textLabel: "pe-button__text-label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",
    // states      
    border: "pe-button--border",
    contained: "pe-button--contained",
    disabled: "pe-button--disabled",
    dropdownClosed: "pe-button--dropdown-closed",
    dropdownOpen: "pe-button--dropdown-open",
    extraWide: "pe-button--extra-wide",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    inactive: "pe-button--inactive",
    raised: "pe-button--raised",
    selected: "pe-button--selected",
    separatorAtStart: "pe-button--separator-start"
  };

  const getElement = vnode => vnode.attrs.element || "a";
  const getInitialState = (vnode, createStream) => {
    const dom = createStream(null);
    const focus = createStream(false);
    const inactive = createStream(false);
    const mouseover = createStream(false);
    return {
      dom,
      focus,
      inactive,
      mouseover,
      redrawOnUpdate: createStream.merge([dom, focus, inactive])
    };
  };
  const onMount = vnode => {
    if (!vnode.dom) {
      return;
    }

    const state = vnode.state;
    const attrs = vnode.attrs;

    if (attrs.borders !== undefined) {
      polytheneCore.deprecation("Button", {
        option: "borders",
        newOption: "border"
      });
    }

    state.dom(vnode.dom);

    if (polytheneCore.isClient) {
      const handleInactivate = () => (state.inactive(true), setTimeout(() => state.inactive(false), attrs.inactivate * 1000));

      const onFocus = () => state.focus(!state.mouseover());

      const onBlur = () => state.focus(false);

      const onMouseOver = () => state.mouseover(true);

      const onMouseOut = () => state.mouseover(false);

      const onClick = handleInactivate;
      vnode.dom.addEventListener("focus", onFocus, false);
      vnode.dom.addEventListener("blur", onBlur, false);
      vnode.dom.addEventListener("mouseover", onMouseOver, false);
      vnode.dom.addEventListener("mouseout", onMouseOut, false);
      vnode.dom.addEventListener("click", onClick, false);

      state.removeEventListeners = () => (vnode.dom.removeEventListener("focus", onFocus, false), vnode.dom.removeEventListener("blur", onBlur, false), vnode.dom.removeEventListener("mouseover", onBlur, false), vnode.dom.removeEventListener("mouseout", onMouseOut, false), vnode.dom.removeEventListener("click", onClick, false));
    }
  };
  const onUnMount = vnode => vnode.state.removeEventListeners && vnode.state.removeEventListeners();
  const createProps = (vnode, {
    keys: k
  }) => {
    const state = vnode.state;
    const attrs = vnode.attrs;
    const disabled = attrs.disabled;
    const inactive = attrs.inactive || state.inactive();
    const onClickHandler = attrs.events && attrs.events[k.onclick];
    const onKeyUpHandler = attrs.events && attrs.events[k.onkeyup] || onClickHandler;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs, {
      add: [k.formaction, "type"],
      remove: ["style"]
    }), // Set style on content, not on component
    {
      className: [classes.super, attrs.parentClassName || classes.component, attrs.contained ? classes.contained : null, attrs.raised ? classes.contained : null, attrs.raised ? classes.raised : null, attrs.selected ? classes.selected : null, attrs.highLabel ? classes.highLabel : null, attrs.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.separatorAtStart ? classes.separatorAtStart : null, attrs.border || attrs.borders ? classes.border : null, attrs.dropdown ? classes.hasDropdown : null, attrs.dropdown ? attrs.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events, inactive ? null : {
      [k.tabindex]: disabled || inactive ? -1 : attrs[k.tabindex] || 0,
      [k.onclick]: onClickHandler,
      [k.onkeyup]: e => {
        if (e.keyCode === 13 && state.focus()) {
          state.focus(false);

          if (onKeyUpHandler) {
            onKeyUpHandler(e);
          }
        }
      }
    }, attrs.url, disabled ? {
      disabled: true
    } : null);
  };
  const createContent = (vnode, {
    renderer: h,
    keys: k,
    Ripple,
    Icon,
    Shadow
  }) => {
    const state = vnode.state;
    const attrs = vnode.attrs;
    const noink = attrs.ink !== undefined && attrs.ink === false;
    const disabled = attrs.disabled;
    const children = attrs.children || vnode.children;
    const label = attrs.content ? attrs.content : attrs.label !== undefined ? typeof attrs.label === "object" ? attrs.label : h("div", {
      className: classes.label
    }, h("div", {
      className: classes.textLabel,
      style: attrs.textStyle
    }, attrs.label)) : children ? children : null;
    const noWash = disabled || attrs.wash !== undefined && !attrs.wash;
    return h("div", {
      [k.class]: classes.content,
      style: attrs.style
    }, [h(Shadow, {
      key: "shadow",
      shadowDepth: attrs.shadowDepth !== undefined ? attrs.shadowDepth : 0,
      animated: true
    }), // Ripple
    disabled || noink || !Ripple || (h.displayName === "react" ? !state.dom() : false) // somehow Mithril does not update when the dom stream is updated
    ? null : h(Ripple, Object.assign({}, {
      key: "ripple",
      target: state.dom()
    }, attrs.ripple)), // hover
    noWash ? null : h("div", {
      key: "wash",
      className: classes.wash
    }), label, attrs.dropdown ? h(Icon, {
      className: classes.dropdown,
      key: "dropdown",
      svg: {
        content: h.trust(polytheneCore.iconDropdownDown)
      }
    }) : null]);
  };

  var button = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    getInitialState: getInitialState,
    onMount: onMount,
    onUnMount: onUnMount,
    createProps: createProps,
    createContent: createContent
  });

  const MAX_SHADOW_DEPTH = 5;

  let tapStart,
      tapEndAll = () => {},
      downButtons = [];

  const animateZ = (which, vnode) => {
    const shadowDepthBase = vnode.state.shadowDepthBase;
    const increase = vnode.attrs.increase || 1;
    const shadowDepth = vnode.state.shadowDepth();
    const newShadowDepth = which === "down" && shadowDepthBase < MAX_SHADOW_DEPTH ? Math.min(shadowDepthBase + increase, MAX_SHADOW_DEPTH) : which === "up" ? Math.max(shadowDepth - increase, shadowDepthBase) : shadowDepth;

    if (newShadowDepth !== shadowDepth) {
      vnode.state.shadowDepth(newShadowDepth);
    }
  };

  const tapHandler = (which, vnode) => {
    if (which === "down") {
      downButtons.push(Object.assign({}, vnode));
    }

    const animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;

    if (animateOnTap) {
      animateZ(which, vnode);
    }
  };

  const initTapEvents = vnode => {
    if (polytheneCore.isServer) return;

    tapStart = () => tapHandler("down", vnode);

    tapEndAll = () => {
      downButtons.map(buttonVnode => tapHandler("up", buttonVnode));
      downButtons = [];
    };

    polytheneCore.pointerStartMoveEvent.forEach(evt => vnode.dom.addEventListener(evt, tapStart));
    polytheneCore.pointerEndMoveEvent.forEach(evt => document.addEventListener(evt, tapEndAll));
  };

  const clearTapEvents = vnode => {
    polytheneCore.pointerStartMoveEvent.forEach(evt => vnode.dom.removeEventListener(evt, tapStart));
    polytheneCore.pointerEndMoveEvent.forEach(evt => document.removeEventListener(evt, tapEndAll));
  };

  const getInitialState$1 = (vnode, createStream) => {
    const attrs = vnode.attrs;
    const shadowDepthBase = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z !== undefined // deprecated
    ? attrs.z : 1;
    const shadowDepth = createStream(shadowDepthBase);
    const tapEventsInited = createStream(false);
    return {
      shadowDepthBase,
      shadowDepth,
      tapEventsInited,
      redrawOnUpdate: createStream.merge([shadowDepth])
    };
  };
  const onMount$1 = vnode => {
    if (!vnode.dom) {
      return;
    }

    const state = vnode.state;
    const attrs = vnode.attrs;

    if (attrs.z !== undefined) {
      polytheneCore.deprecation("RaisedButton", {
        option: "z",
        newOption: "shadowDepth"
      });
    }

    if (!state.tapEventsInited()) {
      initTapEvents(vnode);
      state.tapEventsInited(true);
    }
  };
  const onUnMount$1 = vnode => {
    if (vnode.state.tapEventsInited()) {
      clearTapEvents(vnode);
    }
  };
  const createProps$1 = vnode => {
    const attrs = vnode.attrs;
    const state = vnode.state;
    const children = attrs.children || vnode.children || [];
    return Object.assign({}, {
      raised: true,
      animateOnTap: false,
      wash: attrs.wash !== undefined ? attrs.wash : false,
      children
    }, attrs, {
      shadowDepth: attrs.disabled ? 0 : state.shadowDepth()
    });
  };
  const createContent$1 = vnode => vnode.children;

  var raisedButton = /*#__PURE__*/Object.freeze({
    getInitialState: getInitialState$1,
    onMount: onMount$1,
    onUnMount: onUnMount$1,
    createProps: createProps$1,
    createContent: createContent$1
  });

  exports.coreButton = button;
  exports.coreRaisedButton = raisedButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-button.js.map
