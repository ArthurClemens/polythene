import { filterSupportedAttributes } from 'polythene-core';

var classes = {
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

const getElement = () => "div"; // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content

const primaryContent = (h, k, requiresKeys, attrs, children) => {
  const url = attrs.keyboardControl ? null : attrs.url;
  const element = attrs.element ? attrs.element : url ? "a" : "div";
  const contentFrontClass = [classes.content, classes.contentFront, attrs.compactFront ? classes.compactFront : null].join(" ");
  const frontComp = attrs.front ? h("div", Object.assign({}, requiresKeys ? {
    key: "front"
  } : null, {
    className: contentFrontClass
  }), attrs.front) : attrs.indent ? h("div", Object.assign({}, requiresKeys ? {
    key: "front"
  } : null, {
    className: contentFrontClass
  })) : null;
  const hasTabIndex = !attrs.header && attrs.url;
  const props = Object.assign({}, filterSupportedAttributes(attrs), attrs.events, {
    className: classes.primary,
    style: null
  }, hasTabIndex && {
    [k.tabindex]: attrs[k.tabindex] || 0
  }, url);
  const content = attrs.content ? attrs.content : [frontComp, h("div", {
    className: classes.content,
    style: attrs.style
  }, [attrs.content ? Object.assign({}, requiresKeys ? {
    key: "content"
  } : null, attrs.content) : children, attrs.title && !attrs.content ? h("div", Object.assign({}, requiresKeys ? {
    key: "title"
  } : null, {
    className: classes.title
  }), attrs.title) : null, attrs.subtitle ? h("div", Object.assign({}, requiresKeys ? {
    key: "subtitle"
  } : null, {
    className: classes.subtitle
  }), attrs.subtitle) : null, attrs.highSubtitle ? h("div", Object.assign({}, requiresKeys ? {
    key: "highSubtitle"
  } : null, {
    className: classes.subtitle + " " + classes.highSubtitle
  }), attrs.highSubtitle) : null, attrs.subContent ? h("div", Object.assign({}, requiresKeys ? {
    key: "subContent"
  } : null, {
    className: classes.subContent
  }), attrs.subContent) : null])];
  return h(element, props, content);
};

const secondaryContent = (h, k, requiresKeys, Icon, attrs = {}) => {
  const url = attrs.keyboardControl ? null : attrs.url;
  const element = attrs.element ? attrs.element : url ? "a" : "div";
  const hasTabIndex = attrs.url;
  return h(element, Object.assign({}, url, {
    className: classes.secondary
  }, requiresKeys ? {
    key: "secondary"
  } : null, filterSupportedAttributes(attrs), hasTabIndex && {
    [k.tabindex]: attrs[k.tabindex] || 0
  }), h("div", {
    className: classes.content
  }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.content ? attrs.content : null]));
};

const createProps = (vnode, {
  keys: k
}) => {
  const attrs = vnode.attrs;
  const hasTabIndex = !attrs.header && !attrs.url && !(attrs.secondary && attrs.secondary.url);
  const heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;
  return Object.assign({}, filterSupportedAttributes(attrs, {
    remove: ["tabindex", "tabIndex"]
  }), // tabindex is set elsewhere
  {
    className: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, attrs.highlight ? classes.highlight : null, attrs.header ? classes.header : null, attrs.navigation ? classes.navigation : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, heightClass, attrs.className || attrs[k.class]].join(" ")
  }, hasTabIndex && {
    [k.tabindex]: attrs[k.tabindex] || 0 // events and url are attached to primary content to not interfere with controls

  });
};
const createContent = (vnode, {
  renderer: h,
  requiresKeys,
  keys: k,
  Ripple,
  Icon
}) => {
  const attrs = vnode.attrs;
  const primaryAttrs = Object.assign({}, requiresKeys ? {
    key: "primary"
  } : null, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs[k.class];
  return [attrs.ink && !attrs.disabled ? h(Ripple, Object.assign({}, attrs.ripple, requiresKeys ? {
    key: "ripple"
  } : null)) : null, primaryContent(h, k, requiresKeys, primaryAttrs, attrs.children || vnode.children), attrs.secondary ? secondaryContent(h, k, requiresKeys, Icon, attrs.secondary) : null];
};

var listTile = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  createProps: createProps,
  createContent: createContent
});

export { listTile as coreListTile };
