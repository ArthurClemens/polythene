import m from "mithril";
import "./theme/index";

// import p from "polythene/polythene/polythene";
// import ripple from "polythene/ripple/ripple";
import { shadow } from "polythene-shadow";
// import "polythene/base-button/base-button";

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

// const MAX_Z = 5;

// const startType = window.PointerEvent ? "pointerdown" : (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) ? "touchstart" : "mousedown";
// const endType = window.PointerEvent ? "pointerup" : (("ontouchend" in window) || window.DocumentTouch && document instanceof DocumentTouch) ? "touchend" : "mouseup";

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
//     // if (state.animateOnTap && !p.isTouch) {
//     //   animateZ(ctrl, opts, name);
//     // }
//   };
//   tapStart = () => (tapHandler(ctrl, opts, "down"));
//   tapEnd = () => (tapHandler(ctrl, opts, "up"));
//   tapEndAll = () => {
//     downButtons.map((btn) => {
//       tapHandler(btn.ctrl, btn.opts, "up");
//     });
//     downButtons = [];
//   };
//   el.addEventListener(startType, tapStart);
//   el.addEventListener(endType, tapEnd);
//   window.addEventListener(endType, tapEndAll);
// };

// const clearTapEvents = function(el) {
//   el.removeEventListener(startType, tapStart);
//   el.removeEventListener(endType, tapEnd);
//   window.removeEventListener(endType, tapEndAll);
// };

const createView = (vnode) => {
  const state = vnode.state;
  // const noink = (state.ink !== undefined && state.ink === false);
  const disabled = state.disabled;
  const tag = state.tag || "a";
  const inactive = !!state.inactive;

  // state.inactive = (state.inactive !== undefined)
  //     ? (state.inactive === false)
  //         ? false
  //         : true
  //     : state.inactive;

  // // handle multiple configs:
  // // - passed as param in the url Object
  // // - passed as state.config
  // // - the default button config
  // const buttonConfig = (el, isInited, context) => {
  //     if (isInited) {
  //         return;
  //     }
  //     state.el = el;
  //     if (!disabled && !inactive) {
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
    {}, {
      class: [
        (state.parentClass || CSS_CLASSES.block),
        (state.selected ? CSS_CLASSES.selected : null),
        (disabled ? CSS_CLASSES.disabled : null),
        (inactive ? CSS_CLASSES.inactive : null),
        (state.borders ? CSS_CLASSES.borders : null),
        (state.raised ? CSS_CLASSES.raised : null),
        (state.focus ? CSS_CLASSES.focusState : null),
        state.class
      ].join(" "),
      id: state.id || "",
      tabindex: (disabled || inactive) ? -1 : state.tabindex || 0,
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
    state.url ? state.url : null,
    state.formaction ? {
      formaction: state.formaction
    } : null,
    state.type ? {
      type: state.type
    } : null,
    state.events ? state.events : null, {
      // config: (...args) => [
      //   // buttonConfig(...args),
      //   stateConfig(...args),
      //   urlConfig(...args)
      // ]
    },
    disabled ? {
      disabled: true
    } :
    null
  );

  const label = state.content ?
    state.content :
    (state.label) ?
    (typeof state.label === "object") ?
    state.label :
    m("div", {
      class: CSS_CLASSES.label
    }, state.label) :
    null;

  const noWash = disabled || (state.wash !== undefined && !state.wash);
  const wash = !noWash;
  // const rippleOpts = {
  //   ripple: state.ripple,
  //   inactive: noink
  // };
  const content = m("div", {
    "class": CSS_CLASSES.content
  }, [
    (state.raised && !disabled)
      ? m(shadow, {
        z: state.z,
        animated: true
      })
      : null,
    // ripple
    // disabled ? null : m(ripple, rippleOpts),
    // hover
    wash ? m("div", {
      class: CSS_CLASSES.wash
    }) : null,
    // focus
    disabled ? null : m("div", {
      class: CSS_CLASSES.focus
    }),
    label
  ]);
  return m(tag, props, [state.before, content, state.after]);
};

const component = {
  oninit: (vnode) => {
    const z = (vnode.attrs.z !== undefined) ? vnode.attrs.z : 1;
    vnode.state = {
      ...vnode.attrs,
      el: undefined,
      baseZ: z,
      z: z,
      inactive: false,
      focus: false,
      mouseover: false
    };
  },
  view: (vnode) => {
    return createView(vnode);
  }
};

export default component;

