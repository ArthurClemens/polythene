import { filterSupportedAttributes, show, hide } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const theme = customTheme;

const sizeClasses = {
  small:   classes.small,
  regular: classes.regular,
  medium:  classes.medium,
  large:   classes.large,
  fab:     classes.fab
};

const classForSize = (size = "regular") => sizeClasses[size];

const showSpinner = (state, attrs) => {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  return show(Object.assign({},
    attrs, {
      el: state.dom(),
      showClass: classes.visible
    }
  )).then(() => {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

const hideSpinner = (state, attrs) => {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  return hide(Object.assign({},
    attrs, {
      el: state.dom(),
      showClass: classes.visible
    }
  )).then(() => {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

export const getInitialState = (vnode, createStream) => {
  const visible = createStream(false);
  const dom = createStream();
  return {
    dom,
    visible,
    redrawOnUpdate: createStream.merge([visible])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    showSpinner(state, attrs);
  }
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs),
    {
      className: [
        classes.component,
        attrs.instanceClass,
        classForSize(attrs.size),
        attrs.singleColor ? classes.singleColor: null,
        attrs.raised ? classes.raised : null,
        attrs.animated ? classes.animated : null,
        attrs.permanent ? classes.permanent : null,
        attrs.permanent ? classes.visible : null,
        attrs.className || attrs[k.class],
      ].join(" "),
    },
    attrs.events
  );
};

export const createContent = (vnode, { renderer: h, Shadow }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (state.hide) {
    setTimeout(() => { hideSpinner(state, attrs); }, 0);
  }

  return [
    attrs.raised && attrs.content
      ? h(Shadow, { key: "shadow", z: attrs.z })
      : null,
    attrs.content
  ];
};
