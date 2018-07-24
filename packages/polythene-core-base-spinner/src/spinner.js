import { filterSupportedAttributes, transitionComponent, classForSize, deprecation } from "polythene-core";
import classes from "polythene-css-classes/base-spinner";

const transitionOptions = (state, attrs, isShow) => ({
  state,
  attrs,
  isShow,
  domElements: {
    el: state.dom(),
  },
  showClass: classes.visible
});

const showSpinner = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, true));

const hideSpinner = (state, attrs) =>
  transitionComponent(transitionOptions(state, attrs, false));

export const getInitialState = (vnode, createStream) => {
  const transitioning = createStream(false);
  const visible = createStream(false);
  const dom = createStream(null);
  return {
    dom,
    visible,
    transitioning,
    redrawOnUpdate: createStream.merge([transitioning])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (attrs.z !== undefined) {
    deprecation("Spinner", { option: "z", newOption: "shadowDepth" });
  }

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
        classForSize(classes, attrs.size),
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
  const shadowDepth = attrs.shadowDepth !== undefined
    ? attrs.shadowDepth
    : attrs.z; // deprecated

  return [
    attrs.raised && attrs.content
      ? h(Shadow, { key: "shadow", shadowDepth })
      : null,
    attrs.content
  ];
};
