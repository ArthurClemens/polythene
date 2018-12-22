import { filterSupportedAttributes, classForSize } from 'polythene-core';

var classes = {
  component: "pe-icon",
  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

const getElement = vnode => vnode.attrs.element || "div";
const createProps = (vnode, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  return Object.assign({}, filterSupportedAttributes(attrs), {
    className: [classes.component, classForSize(classes, attrs.size), attrs.avatar ? classes.avatar : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};
const createContent = (vnode, {
  renderer: h,
  SVG
}) => {
  const attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.svg ? h(SVG, attrs.svg) : attrs.src ? h("img", {
    src: attrs.src
  }) : attrs.children || vnode.children;
};

var icon = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});

export { icon as coreIcon };
