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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Props to be passed to a dialog
var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  var isCover = !(attrs.push || attrs.permanent || attrs.mini);
  return _extends({}, attrs, {
    fullBleed: true,
    className: null,
    parentClassName: [attrs.className, classes.component, isCover ? classes.cover : null, attrs.push ? classes.push : null, attrs.permanent ? classes.permanent : null, attrs.border ? classes.border : null, attrs.mini ? classes.mini : null, attrs.floating ? classes.floating : null, attrs.fixed ? classes.fixed : null, attrs.anchor === "end" ? classes.anchorEnd : null].join(" "),
    inactive: attrs.permanent && !attrs.mini,
    z: attrs.z !== undefined ? attrs.z : 0
  });
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var drawer = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});

export { drawer as coreDrawer };
