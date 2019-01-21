import { deprecation, filterSupportedAttributes } from 'polythene-core';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var classes = {
  component: "pe-list",
  // states
  border: "pe-list--border",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorder: "pe-list--indented-border",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",
  // lookup
  header: listTileClasses.header
};

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};
var paddingClasses = {
  both: classes.padding,
  bottom: classes.paddingBottom,
  top: classes.paddingTop,
  none: null
};

var paddingClass = function paddingClass() {
  var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "both";
  return paddingClasses[attr];
};

var onMount = function onMount(vnode) {
  var attrs = vnode.attrs;

  if (attrs.borders !== undefined) {
    deprecation("List", {
      option: "borders",
      newOption: "border"
    });
  }

  if (attrs.indentedBorders !== undefined) {
    deprecation("List", {
      option: "indentedBorders",
      newOption: "indentedBorder"
    });
  }
};
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;
  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.border || attrs.borders ? classes.border : null, attrs.indentedBorder || attrs.indentedBorders ? classes.indentedBorder : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, paddingClass(attrs.padding), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      requiresKeys = _ref2.requiresKeys,
      k = _ref2.keys,
      ListTile = _ref2.ListTile;
  var attrs = vnode.attrs;
  var headerOpts;

  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts[k.class] = [classes.header, headerOpts[k.class] || null].join(" ");
  }

  var tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
  return [headerOpts ? h(ListTile, _objectSpread({}, requiresKeys ? {
    key: "header"
  } : undefined, attrs.all, headerOpts, {
    header: true
  })) : undefined, attrs.all ? tiles.map(function (tileOpts) {
    return h(ListTile, _objectSpread({}, attrs.all, tileOpts));
  }) : tiles];
};

var list = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  onMount: onMount,
  createProps: createProps,
  createContent: createContent
});

export { list as coreList };
