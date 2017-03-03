import m from "mithril";
import ripple from "polythene-ripple";
import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

export const classes = {
  component:  "pe-button pe-text-button",
  content:    "pe-button__content",
  label:      "pe-button__label",
  wash:       "pe-button__wash",
  focus:      "pe-button__focus",
  selected:   "pe-button--selected",
  disabled:   "pe-button--disabled",
  borders:    "pe-button--borders",
  inactive:   "pe-button--inactive",
  focused:    "pe-button--focus"
};

const EL_ATTRS = [
  "formaction",
  "type"
];

const view = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const noink = (attrs.ink !== undefined && attrs.ink === false);
  const disabled = attrs.disabled;
  const element = attrs.element || "a";
  const tabIndex = disabled || attrs.inactive
    ? -1
    : attrs.tabindex || 0;
  const onClickHandler = attrs.events && attrs.events.onclick;
  const props = Object.assign(
    {}, 
    filterSupportedAttributes(attrs, EL_ATTRS),
    {
      class: [
        attrs.parentClass || classes.component,
        attrs.selected ? classes.selected : null,
        disabled ? classes.disabled : null,
        attrs.inactive ? classes.inactive : null,
        attrs.borders ? classes.borders : null,
        state.focus ? classes.focused : null,
        attrs.class
      ].join(" "),
      tabIndex,
      // handle focus events
      onfocus: () => state.focus = !state.mouseover,
      onblur: () => state.focus = false,
      // don"t show focus on click (detected by not being in mouse over state)
      onmouseover: () => state.mouseover = true,
      onmouseout: () => state.mouseover = false,
      // if focus, dispatch click event on ENTER
      onkeydown: (e) => {
        if (e.which === 13 && state.focus) {
          state.focus = false;
          if (onClickHandler) {
            onClickHandler(e);
          }
        }
      }
    },
    attrs.style ? { style: {}} : null,
    attrs.events,
    attrs.url,
    disabled ? { disabled: true } : null
  );
  const children = attrs.children || vnode.children;
  const label = attrs.content
    ? attrs.content
    : attrs.label
      ? typeof attrs.label === "object"
        ? attrs.label
        : m("div", {class: classes.label}, attrs.label)
      : children && children[0]
        ? children
        : null;
  const noWash = disabled || (attrs.wash !== undefined && !attrs.wash);
  const content = label
    ? m("div", {
      class: classes.content,
      style: attrs.style || {}
    }, [
      !disabled && attrs.shadowComponent // "protected" option, used by raised-button
        ? attrs.shadowComponent
        : null,
      // ripple
      disabled || noink
        ? null
        : m(ripple, {
          ...attrs.ripple,
          getTarget: () => vnode.dom
        }),
      // hover
      noWash ? null : m("div", {class: classes.wash}),
      // focus
      disabled ? null : m("div", {class: classes.focus}),
      label
    ])
    : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    vnode.state.focus = false;
    vnode.state.mouseover = false;
  },
  view
};
