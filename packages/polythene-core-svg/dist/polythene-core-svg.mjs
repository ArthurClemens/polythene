import { filterSupportedAttributes } from 'polythene-core';

var classes = {
  component: "pe-svg"
};

const getElement = vnode => vnode.attrs.element || "div";
const onMount = vnode => {
  if (!vnode.dom) {
    return;
  } // Prevent that SVG gets keyboard focus


  const elem = vnode.dom.querySelector("svg");

  if (elem) {
    elem.setAttribute("focusable", "false");
  }
};
const createProps = (vnode, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  return Object.assign({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
const createContent = vnode => {
  const attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var svg = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});

export { svg as coreSVG };
