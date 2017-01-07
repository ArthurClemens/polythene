import m from "mithril";
import { shadow } from "polythene-shadow";
import { ripple } from "polythene-ripple";
import { isTouch, touchStartEvent, touchEndEvent, subscribe, filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";

const classes = {
  component: "pe-button pe-button--text",
  content: "pe-button__content",
  label: "pe-button__label",
  raised: "pe-button--raised",
  wash: "pe-button__wash",
  focus: "pe-button__focus",
  selected: "pe-button--selected",
  disabled: "pe-button--disabled",
  borders: "pe-button--borders",
  inactive: "pe-button--inactive",
  focusState: "pe-button--focus"
};

const EL_ATTRS = [
  "formaction",
  "type"
];

const MAX_Z = 5;

let tapStart,
  tapEndAll = () => {},
  downButtons = [];

subscribe(touchEndEvent, () => tapEndAll());

const animateZ = (state, attrs, name) => {
  const zBase = state.zBase;
  const increase = attrs.increase || 1;
  let z = state.z;
  if (name === "down" && zBase !== 5) {
    z = Math.min(z + increase, MAX_Z);
  } else if (name === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== state.z) {
    state.z = z;
    m.redraw(); // show shadow animation
  }
};

const inactivate = (state, attrs) => {
  state.inactive = true;
  m.redraw();
  setTimeout(() => {
    state.inactive = false;
    m.redraw();
  }, attrs.inactivate * 1000);
};

const initTapEvents = (el, state, attrs) => {
  const tapHandler = (state, attrs, name) => {
    if (name === "down") {
      downButtons.push({
        state,
        attrs
      });
    } else
    if (name === "up") {
      if (attrs.inactivate && !state.inactive) {
        inactivate(state, attrs);
      }
    }
    // no z animation on touch
    const animateOnTap = attrs.animateOnTap !== false ? true : false;
    if (animateOnTap && !isTouch) {
      animateZ(state, attrs, name);
    }
  };
  tapStart = () => tapHandler(state, attrs, "down");
  tapEndAll = () => {
    downButtons.map((btn) => {
      tapHandler(btn.state, btn.attrs, "up");
    });
    downButtons = [];
  };
  el.addEventListener(touchStartEvent, tapStart);
};

const clearTapEvents = el => {
  el.removeEventListener(touchStartEvent, tapStart);
};

const view = vnode => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const noink = (attrs.ink !== undefined && attrs.ink === false);
  const disabled = attrs.disabled;
  const element = attrs.element || "a";
  const tabIndex = disabled || state.inactive
    ? -1
    : attrs.tabindex || 0;
  const onClickHandler = attrs.events && attrs.events.onclick;
  const props = Object.assign(
    {}, 
    filterSupportedAttributes(attrs, EL_ATTRS),
    {
      class: [
        (attrs.parentClass || classes.component),
        (attrs.selected ? classes.selected : null),
        (disabled ? classes.disabled : null),
        (state.inactive ? classes.inactive : null),
        (attrs.borders ? classes.borders : null),
        (attrs.raised ? classes.raised : null),
        (state.focus ? classes.focusState : null),
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
    attrs.events ? {...attrs.events} : null,
    attrs.url ? {...attrs.url} : null,
    disabled ? {disabled: true} : null
  );
  const label = attrs.content
    ? attrs.content
    : attrs.label
      ? typeof attrs.label === "object"
        ? attrs.label
        : m("div", {class: classes.label}, attrs.label)
      : vnode.children && vnode.children[0]
        ? vnode.children
        : null;
  const noWash = disabled || (attrs.wash !== undefined && !attrs.wash);
  const content = label
    ? m("div", {class: classes.content}, [
      attrs.raised && !disabled
        ? m(shadow, {z: state.z, animated: true})
        : null,
      // ripple
      disabled || noink
        ? null
        : m(ripple, attrs.ripple),
      // hover
      noWash ? null : m("div", {class: classes.wash}),
      // focus
      disabled ? null : m("div", {class: classes.focus}),
      label
    ])
    : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const button = {
  theme: customTheme, // accepts (className, vars)
  oninit: vnode => {
    const z = (vnode.attrs.z !== undefined) ? vnode.attrs.z : 1;
    vnode.state = {
      el: undefined,
      zBase: z,
      z: z,
      tapEventsInited: false,
      inactive: !!vnode.attrs.inactive,
      focus: false,
      mouseover: false
    };
  },
  oncreate: vnode => {
    if (!vnode.attrs.disabled && !vnode.state.inactive && !vnode.state.tapEventsInited) {
      vnode.state.el = vnode.dom;
      initTapEvents(vnode.dom, vnode.state, vnode.attrs);
      vnode.state.tapEventsInited = true;
    }
  },
  onremove: vnode => {
    if (vnode.state.tapEventsInited) {
      clearTapEvents(vnode.dom);
    }
  },
  view
};
