import { filterSupportedAttributes, transitionComponent, classForSize, deprecation } from 'polythene-core';

var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

const transitionOptions = (state, attrs, isShow) => ({
  state,
  attrs,
  isShow,
  domElements: {
    el: state.dom()
  },
  showClass: classes.visible
});

const showSpinner = (state, attrs) => transitionComponent(transitionOptions(state, attrs, true));

const hideSpinner = (state, attrs) => transitionComponent(transitionOptions(state, attrs, false));

const getInitialState = (vnode, createStream) => {
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
const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }

  const state = vnode.state;
  const attrs = vnode.attrs;

  if (attrs.z !== undefined) {
    deprecation("Spinner", {
      option: "z",
      newOption: "shadowDepth"
    });
  }

  state.dom(vnode.dom);

  if (!attrs.permanent) {
    showSpinner(state, attrs);
  }
};
const createProps = (vnode, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  return Object.assign({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.instanceClass, classForSize(classes, attrs.size), attrs.singleColor ? classes.singleColor : null, attrs.raised ? classes.raised : null, attrs.animated ? classes.animated : null, attrs.permanent ? classes.permanent : null, attrs.permanent ? classes.visible : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};
const createContent = (vnode, {
  renderer: h,
  Shadow
}) => {
  const state = vnode.state;
  const attrs = vnode.attrs;

  if (state.hide) {
    setTimeout(() => {
      hideSpinner(state, attrs);
    }, 0);
  }

  const shadowDepth = attrs.shadowDepth !== undefined ? attrs.shadowDepth : attrs.z; // deprecated

  return [attrs.raised && attrs.content ? h(Shadow, {
    key: "shadow",
    shadowDepth
  }) : null, attrs.content];
};

var spinner = /*#__PURE__*/Object.freeze({
  getInitialState: getInitialState,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});

export { spinner as coreBaseSpinner };
