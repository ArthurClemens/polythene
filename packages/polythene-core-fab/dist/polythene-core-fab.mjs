var classes = {
  component: "pe-fab",
  // elements
  content: "pe-fab__content",
  // states
  mini: "pe-fab--mini"
};

// Props to be passed to a Button, including 'content'

const createProps = (vnode, {
  keys: k,
  renderer: h,
  Icon
}) => {
  const attrs = vnode.attrs;
  const content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return Object.assign({}, attrs, {
    content: h("div", {
      className: classes.content
    }, content),
    parentClassName: [classes.component, attrs.mini ? classes.mini : null, attrs.className || attrs[k.class]].join(" "),
    className: null,
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: {
      increase: 5
    },
    ink: true,
    wash: true,
    raised: true,
    animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
  });
};
const createContent = vnode => vnode.children;

var fab = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});

export { fab as coreFAB };
