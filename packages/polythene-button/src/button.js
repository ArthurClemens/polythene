import m from "mithril";
import "./theme/index";

// import ripple from "polythene/ripple/ripple";
// import { isTouch, touchStartEvent, touchEndEvent } from "polythene-tools";
import { shadow } from "polythene-shadow";

const CSS_CLASSES = {
  block: "pe-button pe-button--text",
  content: "pe-button__content",
  label: "pe-button__label",
  raised: "pe-button--raised",
  wash: "pe-button__wash",
  focus: "pe-button__focus",
  selected: "pe-button--selected",
  disabled: "pe-button--disabled",
  borders: "pe-button--borders",
  inactive: "pe-button--inactive",
  focusState: "pe-button--focus",
};

const supportedElementProps = {
  // Mithril
  key: 1,
  oninit: 1,
  oncreate: 1,
  onupdate: 1,
  onbeforeremove: 1,
  onremove: 1,
  onbeforeupdate: 1,
  style: 1,
  // Polythene
  id: 1,
  href: 1,
  events: 1,
  // Button
  formaction: 1,
  type: 1
};

// const MAX_Z = 5;

// let tapStart,
//   tapEnd,
//   tapEndAll,
//   downButtons = [];

// const animateZ = (state, name) => {
//   const baseZ = state.baseZ;
//   const increase = state.increase || 1;
//   let z = state.z;
//   if (name === "down" && baseZ !== 5) {
//     z = z + increase;
//     z = Math.min(z, MAX_Z);
//   } else if (name === "up") {
//     z = z - increase;
//     z = Math.max(z, baseZ);
//   }
//   if (z !== state.z) {
//     state.z = z;
//     m.redraw(); // make animation visible
//   }
// };

// const inactivate = (state) => {
//   state.inactive = true;
//   m.redraw();
//   setTimeout(() => {
//     state.inactive = false;
//     m.redraw();
//   }, state.inactivate * 1000);
// };

// const initTapEvents = (el, state) => {
//   const tapHandler = (state, name) => {
//     if (name === "down") {
//       downButtons.push({
//         ctrl,
//         opts
//       });
//     } else if (name === "up") {
//       if (state.inactivate && !state.inactive) {
//         inactivate(ctrl, opts);
//       }
//     }
//     // no z animation on touch
//     if (state.animateOnTap && !isTouch) {
//       animateZ(ctrl, opts, name);
//     }
//   };
//   tapStart = () => (tapHandler(ctrl, opts, "down"));
//   tapEnd = () => (tapHandler(ctrl, opts, "up"));
//   tapEndAll = () => {
//     downButtons.map((btn) => {
//       tapHandler(btn.ctrl, btn.opts, "up");
//     });
//     downButtons = [];
//   };
//   el.addEventListener(touchStartEvent, tapStart);
//   el.addEventListener(touchEndEvent, tapEnd);
//   window.addEventListener(touchEndEvent, tapEndAll);
// };

// const clearTapEvents = function(el) {
//   el.removeEventListener(touchStartEvent, tapStart);
//   el.removeEventListener(touchEndEvent, tapEnd);
//   window.removeEventListener(touchEndEvent, tapEndAll);
// };

const filterElementProps = (attrs) => {
  const o = {};
  Object.keys(attrs).forEach(key => {
    if (supportedElementProps[key]) {
      o[key] = attrs[key];
    }
  });
  return o;
};

const view = (vnode) => {
  const state = vnode.state || {};
  const attrs = vnode.attrs || {};

  // const noink = (attrs.ink !== undefined && attrs.ink === false);
  const disabled = attrs.disabled;
  const element = attrs.element || "a";
  const tabIndex = disabled || state.inactive
    ? -1
    : attrs.tabindex || 0;

  // // handle multiple configs:
  // // - passed as param in the url Object
  // // - passed as state.config
  // // - the default button config
  // const buttonConfig = (el, isInited, context) => {
  //     if (isInited) {
  //         return;
  //     }
  //     state.el = el;
  //     if (!disabled && !state.inactive) {
  //         initTapEvents(el, ctrl, Object.assign(
  //             {},
  //             state,
  //             {animateOnTap: (state.animateOnTap !== false) ? true : false}
  //         ));
  //         context.onunload = () => {
  //             clearTapEvents(el);
  //         };
  //     }
  // };

  // const stateConfig = state.config || (() => {});
  // const urlConfig = (state.url && state.url.config) ? state.url.config : (() => {});

  const props = Object.assign(
    {}, 
    filterElementProps(attrs),
    {
      class: [
        (attrs.parentClass || CSS_CLASSES.block),
        (attrs.selected ? CSS_CLASSES.selected : null),
        (disabled ? CSS_CLASSES.disabled : null),
        (state.inactive ? CSS_CLASSES.inactive : null),
        (attrs.borders ? CSS_CLASSES.borders : null),
        (attrs.raised ? CSS_CLASSES.raised : null),
        (state.focus ? CSS_CLASSES.focusState : null),
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
        if (e.which === 13 && state.focus && state.el) {
          // ENTER
          const event = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true
          });
          state.el.dispatchEvent(event);
        }
      }
    },
    // attrs.events ? attrs.events : null, {
      // config: (...args) => [
      //   // buttonConfig(...args),
      //   stateConfig(...args),
      //   urlConfig(...args)
      // ]
    // },
    disabled ? {disabled: true} : null
  );

  const label = attrs.content
    ? attrs.content
    : attrs.label
      ? typeof attrs.label === "object"
        ? attrs.label
        : m("div", {class: CSS_CLASSES.label}, attrs.label)
      : null;

  const noWash = disabled || (attrs.wash !== undefined && !attrs.wash);
  const wash = !noWash;
  // const rippleOpts = {
  //   ripple: attrs.ripple,
  //   inactive: noink
  // };
  const content = label
    ? m("div", {
      "class": CSS_CLASSES.content
    }, [
      attrs.raised && !disabled
        ? m(shadow, {
          z: state.z,
          animated: true
        })
        : null,
      // ripple
      // disabled ? null : m(ripple, rippleOpts),
      // hover
      wash ? m("div", {class: CSS_CLASSES.wash}) : null,
      // focus
      disabled ? null : m("div", {class: CSS_CLASSES.focus}),
      label
    ])
    : null;
  return m(element, props, [attrs.before, content, attrs.after]);
};

export const button = {
  oninit: (vnode) => {
    const z = (vnode.attrs.z !== undefined) ? vnode.attrs.z : 1;
    vnode.state = {
      el: undefined,
      baseZ: z,
      z: z,
      inactive: !!vnode.attrs.inactive,
      focus: false,
      mouseover: false
    };
  },
  view
};

