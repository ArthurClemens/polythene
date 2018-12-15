(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  var classes = {
    component: "pe-search",
    // elements
    content: "pe-search__content",
    // states
    searchFullWidth: "pe-search--full-width",
    searchInset: "pe-search--inset"
  };

  const getElement = vnode => vnode.attrs.element || "div";

  const getNameOfState = state => state.focus && state.dirty ? "focus_dirty" : state.focus ? "focus" : state.dirty ? "dirty" : "none";

  const getInitialState = (vnode, createStream) => {
    const searchState = createStream({});
    return {
      searchState
    };
  };
  const createProps = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.fullWidth ? classes.searchFullWidth : classes.searchInset, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    }, attrs.events);
  };
  const createContent = (vnode, {
    renderer: h,
    TextField
  }) => {
    const state = vnode.state;
    const attrs = vnode.attrs;
    const searchState = getNameOfState(state.searchState());
    const buttons = (attrs.buttons || {})[searchState] || {};
    const textfieldAttrs = attrs.textfield || {};
    return h("div", {
      className: classes.content
    }, [buttons.before, h(TextField, Object.assign({}, textfieldAttrs, {
      key: "input",
      onChange: newState => {
        state.searchState(newState);

        if (textfieldAttrs.onChange) {
          textfieldAttrs.onChange(newState);
        }
      }
    })), buttons.after]);
  };

  var search = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    getInitialState: getInitialState,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreSearch = search;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-search.js.map
