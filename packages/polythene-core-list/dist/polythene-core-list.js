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

  const getElement = vnode => vnode.attrs.element || "div";
  const paddingClasses = {
    both: classes.padding,
    bottom: classes.paddingBottom,
    top: classes.paddingTop,
    none: null
  };

  const paddingClass = (attr = "both") => paddingClasses[attr];

  const onMount = ({
    attrs
  }) => {
    if (attrs.borders !== undefined) {
      polytheneCore.deprecation("List", {
        option: "borders",
        newOption: "border"
      });
    }

    if (attrs.indentedBorders !== undefined) {
      polytheneCore.deprecation("List", {
        option: "indentedBorders",
        newOption: "indentedBorder"
      });
    }
  };
  const createProps = (vnode, {
    keys: k
  }) => {
    const attrs = vnode.attrs;
    return Object.assign({}, polytheneCore.filterSupportedAttributes(attrs), {
      className: [classes.component, attrs.border || attrs.borders ? classes.border : null, attrs.indentedBorder || attrs.indentedBorders ? classes.indentedBorder : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, paddingClass(attrs.padding), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
    });
  };
  const createContent = (vnode, {
    renderer: h,
    requiresKeys,
    keys: k,
    ListTile
  }) => {
    const attrs = vnode.attrs;
    let headerOpts;

    if (attrs.header) {
      headerOpts = Object.assign({}, attrs.header);
      headerOpts[k.class] = [classes.header, headerOpts[k.class] || null].join(" ");
    }

    const tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
    return [headerOpts ? h(ListTile, Object.assign({}, requiresKeys ? {
      key: "header"
    } : null, attrs.all, headerOpts, {
      header: true
    })) : null, attrs.all ? tiles.map(tileOpts => h(ListTile, Object.assign({}, attrs.all, tileOpts))) : tiles];
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
