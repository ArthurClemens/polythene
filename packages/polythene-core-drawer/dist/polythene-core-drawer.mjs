var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

const createProps = vnode => {
  const attrs = vnode.attrs;
  const isCover = !(attrs.push || attrs.permanent || attrs.mini);
  return Object.assign({}, attrs, {
    fullBleed: true,
    className: null,
    parentClassName: [attrs.className, classes.component, isCover ? classes.cover : null, attrs.push ? classes.push : null, attrs.permanent ? classes.permanent : null, attrs.border ? classes.border : null, attrs.mini ? classes.mini : null, attrs.floating ? classes.floating : null, attrs.fixed ? classes.fixed : null, attrs.anchor === "end" ? classes.anchorEnd : null].join(" "),
    inactive: attrs.permanent && !attrs.mini,
    shadowDepth: attrs.shadowDepth !== undefined ? attrs.shadowDepth : 0,
    // deprecated:
    z: attrs.z !== undefined ? attrs.z : undefined
  });
};
const createContent = vnode => vnode.children;

var drawer = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});

export { drawer as coreDrawer };
