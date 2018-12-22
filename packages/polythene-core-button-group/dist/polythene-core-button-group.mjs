var classes = {
  component: "pe-button-group"
};

const createProps = (vnode, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  return Object.assign({}, {
    className: [classes.component, attrs.className || attrs[k.class]].join(" ")
  });
};
const createContent = vnode => vnode.children;

var buttonGroup = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});

export { buttonGroup as coreButtonGroup };
