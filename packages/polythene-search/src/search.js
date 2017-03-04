import m from "mithril";
import textfield from "polythene-textfield";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component:       "pe-search",
  content:         "pe-search__content",
  searchInset:     "pe-search--inset",
  searchFullWidth: "pe-search--full-width"
};

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
      class: [
        classes.component,
        attrs.fullWidth ? classes.searchFullWidth : classes.searchInset,
        attrs.class
      ].join(" ")
    },
    attrs.events
  );
  const searchState = getNameOfState(state.searchState);
  // console.log("searchState", searchState);
  const buttons = (attrs.buttons || {})[searchState] || {};
  // console.log("buttons", buttons);
  const textfieldAttrs = attrs.textfield || {};
  const content = m("div", {
    class: classes.content
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


