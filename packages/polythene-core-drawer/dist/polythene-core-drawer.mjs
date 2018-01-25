var classes = {
  component: "pe-menu pe-drawer",

  // elements
  // holder:         "pe-drawer__holder",
  placeholder: "pe-drawer__placeholder",

  // states
  // open:           "pe-drawer--open",
  permanent: "pe-drawer--permanent"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped menu button component (set in polythene-xxx-menu)

// Props to be passed to the menu component, including 'content'
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys,
      h = _ref.renderer;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return _extends({}, {
    content: h("div", { className: classes.content }, content),
    parentClassName: [classes.component, attrs.className || attrs[k.class]].join(" ")
    // defaults
    // ripple: {
    //   center: true,
    //   opacityDecayVelocity: 0.24
    // },
    // shadow: { increase: 5 },
    // ink: true,
    // wash: true,
    // animateOnTap: attrs.animateOnTap !== undefined
    //   ? attrs.animateOnTap
    //   : true
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

// import { filterSupportedAttributes, subscribe, unsubscribe, show, hide, isTouch, isServer } from "polythene-core";
// import classes from "polythene-css-classes/drawer";

// const SHADOW_Z         = 1;

// export const getElement = vnode =>
//   vnode.attrs.element || "div";

// const positionDrawer = (state, attrs) => {
//   console.log("positionDrawer TODO");
//   if (isServer) {
//     return;
//   }
// };

// const showDrawer = (state, attrs) => {
//   if (attrs.onChange) {
//     attrs.onChange({ visible: false, transitioning: true });
//   }
//   positionDrawer(state, attrs);
//   const transitions = attrs.transitions;
//   const el = state.dom();
//   return show(Object.assign({},
//     attrs,
//     transitions
//       ? transitions.show(el, attrs)
//       : {
//         el,
//         showClass: classes.visible
//       }
//   )).then(() => {
//     if (attrs.onChange) {
//       attrs.onChange({ visible: true, transitioning: false });
//     }
//     if (attrs.didShow) {
//       attrs.didShow(attrs.id);
//     }
//     state.visible(false);
//   });
// };

// const hideDrawer = (state, attrs) => {
//   if (attrs.onChange) {
//     attrs.onChange({ visible: true, transitioning: true });
//   }
//   const transitions = attrs.transitions;
//   const el = state.dom();
//   return hide(Object.assign({},
//     attrs,
//     transitions
//       ? transitions.hide(el, attrs)
//       : {
//         el,
//         showClass: classes.visible
//       }
//   )).then(() => {
//     if (attrs.onChange) {
//       attrs.onChange({ visible: false, transitioning: false });
//     }
//     if (attrs.didHide) {
//       attrs.didHide(attrs.id);
//     }
//     state.visible(false);
//   });
// };

// const handleSubscriptions = (vnode, which) => {
//   const state = vnode.state;
//   const attrs = vnode.attrs;

//   if (which === "mount") {
//     subscribe("resize", state.update);
//     subscribe("keydown", state.handleEscape);
//     setTimeout(() => {
//       state.activateDismissTap();
//       showDrawer(state, attrs);
//     }, 0);
//   } else {
//     unsubscribe("resize", state.update);
//     unsubscribe("keydown", state.handleEscape);
//     state.deActivateDismissTap();
//   }
// };

// export const getInitialState = (vnode, createStream) => {
//   const dom = createStream(null);
//   const visible = createStream(false);
//   return {
//     dom,
//     visible,
//     activateDismissTap: undefined, // set in onMount
//     deActivateDismissTap: undefined, // set in onMount
//     handleDismissTap: undefined, // set in onMount
//     handleEscape: undefined, // set in onMount
//     update: undefined, // set in onMount
//     redrawOnUpdate: createStream.merge([visible])
//   };
// };

// export const onMount = vnode => {
//   if (!vnode.dom) {
//     return;
//   }
//   const state = vnode.state;
//   const attrs = vnode.attrs;
//   state.dom(vnode.dom);

//   if (!attrs.permanent) {
//     state.handleDismissTap = e => {
//       if (e.target === state.dom()) {
//         return;
//       }
//       if (e.defaultPrevented) {
//         hideDrawer(state, attrs);
//       } else {
//         hideDrawer(state, Object.assign({}, attrs, {
//           hideDelay: 0
//         }));
//       }
//     };

//     state.update = () => {
//       positionDrawer(state, attrs);
//     };

//     state.activateDismissTap = () => {
//       if (isTouch) {
//         document.addEventListener("touchstart", state.handleDismissTap);
//       } else {
//         document.addEventListener("click", state.handleDismissTap);
//       }
//     };

//     state.deActivateDismissTap = () => {
//       if (isTouch) {
//         document.removeEventListener("touchstart", state.handleDismissTap);
//       } else {
//         document.removeEventListener("click", state.handleDismissTap);
//       }
//     };

//     state.handleEscape = e => {
//       if (e.key === "Escape" || e.key === "Esc") {
//         hideDrawer(state, Object.assign(
//           {},
//           attrs,
//           { hideDelay: 0 }
//         ));
//       }
//     };

//     handleSubscriptions(vnode, "mount");
//   }
// };

// export const onUnMount = vnode => {
//   const attrs = vnode.attrs;
//   if (!attrs.permanent) {
//     handleSubscriptions(vnode, "unmount");
//   }
// };

// export const createProps = (vnode, { keys: k }) => {
//   const state = vnode.state;
//   const attrs = vnode.attrs;
//   return Object.assign(
//     {},
//     filterSupportedAttributes(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
//     {
//       className: [
//         classes.component,
//         attrs.containerSelector ? classes.hasContainer : null,
//         attrs.permanent ? classes.permanent : null,
//         attrs.backdrop ? classes.backdrop : null,
//         attrs.tone === "dark" ? "pe-dark-tone" : null,
//         attrs.tone === "light" ? "pe-light-tone" : null,
//         attrs.className || attrs[k.class],
//       ].join(" "),
//       // click backdrop: close dialog
//       [k.onclick]: e => {
//         if (e.target !== state.el) {
//           return;
//         }
//         if (attrs.modal) {
//           // not allowed
//           return;
//         }
//         hideDrawer(state, Object.assign({}, attrs, {
//           hideDelay: 0
//         }));
//       }
//     }
//   );
// };

// export const createContent = (vnode, { renderer: h, keys: k, Shadow }) => {
//   const attrs = vnode.attrs;
//   const z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
//   return h("div",
//     {
//       className: classes.content,
//       [k.onclick]: e => e.preventDefault(),
//       style: attrs.style
//     },
//     [
//       z > 0 && h(Shadow, {
//         z,
//         animated: true
//       }),
//       attrs.content
//         ? attrs.content
//         : vnode.children
//     ]
//   );
// };

var drawer = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var vars = {
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
};

var ANIMATION_DURATION = .5;

var show = function show(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration || ANIMATION_DURATION,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show() {
      return el.style.opacity = 1;
    }
  };
};

var hide = function hide(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration || ANIMATION_DURATION,
    hideDelay: hideDelay || 0,
    hide: function hide() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};

export { drawer as coreDrawer, vars, transitions };
