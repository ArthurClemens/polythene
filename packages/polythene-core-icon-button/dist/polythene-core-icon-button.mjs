var classes = {
  component: "pe-button pe-icon-button",
  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",
  // states
  compact: "pe-icon-button--compact"
};

// Props to be passed to a button, including 'content'

const createProps = (vnode, {
  renderer: h,
  Icon
}) => {
  const attrs = vnode.attrs;
  const content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return Object.assign({}, {
    content: h("div", {
      className: classes.content
    }, content),
    after: attrs.label && h("div", {
      className: classes.label
    }, attrs.label),
    parentClassName: [attrs.parentClassName || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs);
};
const createContent = vnode => vnode.children;

var iconButton = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});

export { iconButton as coreIconButton };
