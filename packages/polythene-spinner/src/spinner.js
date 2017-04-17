import m from "mithril";
import { filterSupportedAttributes } from "polythene-core";
import { show, hide } from "polythene-core";
import shadow from "polythene-shadow";
import { customTheme } from "./theme";
import classes from "./classes";

const typeClasses = {
  small:   classes.small,
  regular: classes.regular,
  medium:  classes.medium,
  large:   classes.large,
  fab:     classes.fab
};

const classForType = (mode = "regular") => typeClasses[mode];

const showSpinner = (state, attrs) => {
  if (state.isTransitioning) {
    return;
  }
  state.isTransitioning = true;
  return show(Object.assign(
    {},
    attrs, {
      el: state.el,
      showClass: classes.visible
    }
  )).then(() => {
    state.isTransitioning = false;
    state.visible = true;
  });
};

const hideSpinner = (state, attrs) => {
  if (state.isTransitioning) {
    return;
  }
  state.isTransitioning = true;
  return hide(Object.assign(
    {},
    attrs, {
      el: state.el,
      afterHide: () => (state.el.style.display = "none"),
      showClass: classes.visible
    }
  )).then(() => {
    state.isTransitioning = false;
    state.visible = false;
    state.hide = false;
    m.redraw(); // removes remainder of drawn component
  });
};

const delay = (attrs, mode) => {
  const value = attrs[mode];
  return ((value !== true) && !isNaN(value))
    ? parseFloat(value, 10) * 1000
    : false;
};

const notifyState = (state, attrs) => {
  if (attrs.percentage && attrs.getPercentage) {
    const percentage = (typeof attrs.percentage === "function")
      ? attrs.percentage()
      : attrs.percentage;
    attrs.getPercentage(percentage, state, attrs);
  }
};

const createView = (state, attrs) => {
  const element = attrs.element || "div";
  const props = Object.assign({},
    filterSupportedAttributes(attrs),
    {
      class: [
        classes.component,
        attrs.instanceClass,
        classForType(attrs.type),
        attrs.singleColor ? classes.singleColor: null,
        attrs.raised ? classes.raised : null,
        attrs.animated ? classes.animated : null,
        attrs.permanent ? classes.permanent : null,
        attrs.class
      ].join(" "),
      oncreate: ({ dom }) => {
        state.el = dom;
        notifyState(state, attrs);
        if (!attrs.permanent) {
          setTimeout(() => showSpinner(state, attrs), 0);
        }
      }
    },
    attrs.events ? attrs.events : null
  );

  notifyState(state, attrs);

  if (state.hide) {
    setTimeout(() => { hideSpinner(state, attrs); }, 0);
  }

  const content = [
    attrs.raised && attrs.content
      ? m(shadow, { z: attrs.z })
      : null,
    attrs.content || m("div", { class: classes.animation }, "Specific spinner missing")
  ];

  return m(element, props, [attrs.before, content, attrs.after]);
};

const view = ({ state, attrs }) => {
  if (!state.visible) {
    if ((attrs.hide !== undefined && !attrs.hide) || attrs.show) {
      const showDelay = delay(attrs, "show");
      if (showDelay) {
        setTimeout(() => {
          state.visible = true;
          m.redraw();
        }, showDelay);
      } else {
        state.visible = true;
      }
    }
  } else {
    if ((attrs.show !== undefined && !attrs.show) || attrs.hide) {
      const hideDelay = delay(attrs, "hide");
      if (hideDelay) {
        setTimeout(() => {
          state.hide = true;
          m.redraw();
        }, hideDelay);
      } else {
        state.hide = true;
      }
    }
  }
  return state.visible
    ? createView(state, attrs)
    : m("span", { class: classes.placeholder });
};

export default {
  theme: customTheme, // accepts (selector, vars)
  oninit: vnode => {
    vnode.state = Object.assign(
      vnode.state, 
      {
        el: null,
        isTransitioning: false,
        visible: vnode.attrs.permanent || false,
        hide: false,
        percentage: 0
      }
    );
  },
  view
};
