import m from "mithril";
import textfield from "polythene-textfield";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

const getNameOfState = state =>
  state.focus && state.dirty
    ? "focus_dirty"
    : state.focus
      ? "focus"
      : state.dirty
        ? "dirty"
        : "none";

const view = ({state, attrs}) => {
  const element = attrs.element || "div";
  const props = Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.fullWidth ? classes.searchFullWidth : classes.searchInset,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.class
      ].join(" ")
    },
    attrs.events
  );
  const searchState = getNameOfState(state.searchState);
  const buttons = (attrs.buttons || {})[searchState] || {};
  const textfieldAttrs = attrs.textfield || {};
  const content = m("div", {
    className: classes.content
  }, [
    buttons.before,
    m(textfield, Object.assign(
      {},
      textfieldAttrs,
      {
        getState: newState => {
          state.searchState = Object.assign({}, newState);
          if (textfieldAttrs.getState) {
            textfieldAttrs.getState(state.searchState);
          }
        }
      }
    )),
    buttons.after
  ]);
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    vnode.state.searchState = {};
  },
  view
};


