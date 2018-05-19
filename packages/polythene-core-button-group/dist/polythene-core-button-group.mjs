var classes = {
  component: "pe-button-group"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-button-group)

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, {
    className: [classes.component, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode) {
  return vnode.children;
};

var buttonGroup = /*#__PURE__*/Object.freeze({
  createProps: createProps,
  createContent: createContent
});

var vars = {
  general_styles: true
};

export { buttonGroup as coreButtonGroup, vars };
