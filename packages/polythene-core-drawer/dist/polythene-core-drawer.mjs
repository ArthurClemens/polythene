var classes = {
  component: "pe-menu pe-drawer"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped menu component (set in polythene-xxx-menu)

// Props to be passed to the menu component, including 'content'
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys,
      h = _ref.renderer;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return _extends({}, {
    content: h("div", { className: classes.content }, content),
    parentClassName: [classes.component, attrs.className || attrs[k.class]].join(" ")
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var drawer = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var vars = {
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
};

export { drawer as coreDrawer, vars };
