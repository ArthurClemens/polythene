var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

const blade = (num, h) => h("div", {
  key: `blade-${num}`,
  className: classes.blade
});

const createProps = (vnode, {
  renderer: h
}) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes.blades
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(num => blade(num, h)));
  return Object.assign({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = /*#__PURE__*/Object.freeze({
  createProps: createProps
});

export { spinner as coreIOSSpinner };
