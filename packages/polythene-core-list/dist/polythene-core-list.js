(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

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
    selectable: "pe-list-tile--selectable",
    selected: "pe-list-tile--selected",
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

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

  var onMount = function onMount(_ref) {
    var attrs = _ref.attrs;

    if (attrs.borders) {
      polytheneCore.deprecation("List", "borders", "border");
    }
    if (attrs.indentedBorders) {
      polytheneCore.deprecation("List", "indentedBorders", "indentedBorder");
    }
  };

  var createProps = function createProps(vnode, _ref2) {
    var k = _ref2.keys;

    var attrs = vnode.attrs;
    return _extends({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.border || attrs.borders ? classes.border : null, attrs.indentedBorder || attrs.indentedBorders ? classes.indentedBorder : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, paddingClass(attrs.padding), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };

  var createContent = function createContent(vnode, _ref3) {
    var h = _ref3.renderer,
        requiresKeys = _ref3.requiresKeys,
        k = _ref3.keys,
        ListTile = _ref3.ListTile;

    var attrs = vnode.attrs;
    var headerOpts = void 0;
    if (attrs.header) {
      headerOpts = _extends({}, attrs.header);
      headerOpts[k.class] = [classes.header, headerOpts[k.class] || null].join(" ");
    }
    var tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
    return [headerOpts ? h(ListTile, _extends({}, requiresKeys ? { key: "header" } : null, attrs.all, headerOpts, {
      header: true
    })) : null, attrs.all ? tiles.map(function (tileOpts) {
      return h(ListTile, _extends({}, attrs.all, tileOpts));
    }) : tiles];
  };

  var list = /*#__PURE__*/Object.freeze({
    getElement: getElement,
    onMount: onMount,
    createProps: createProps,
    createContent: createContent
  });

  exports.coreList = list;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core-list.js.map
