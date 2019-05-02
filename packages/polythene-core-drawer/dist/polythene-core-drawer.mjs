function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

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

var _Drawer = function _Drawer(_ref) {
  var h = _ref.h,
      Dialog = _ref.Dialog,
      props = _objectWithoutProperties(_ref, ["h", "Dialog"]);

  var isCover = !(props.push || props.permanent || props.mini);

  var componentProps = _extends({}, props, {
    fullBleed: true,
    className: null,
    parentClassName: [props.className, classes.component, isCover ? classes.cover : null, props.push ? classes.push : null, props.permanent ? classes.permanent : null, props.border ? classes.border : null, props.mini ? classes.mini : null, props.floating ? classes.floating : null, props.fixed ? classes.fixed : null, props.anchor === "end" ? classes.anchorEnd : null].join(" "),
    inactive: props.permanent && !props.mini,
    shadowDepth: props.shadowDepth !== undefined ? props.shadowDepth : 0,
    // deprecated:
    z: props.z !== undefined ? props.z : undefined
  });

  return h(Dialog, componentProps, props.children);
};

export { _Drawer };
