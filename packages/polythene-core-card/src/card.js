import { filterSupportedAttributes, deprecation } from "polythene-core";
import classes from "polythene-css-classes/card";

const createOverlay = ({ dispatcher, attrs, h, k }) => {
  const element = attrs.element || "div";
  const content = attrs.content.map(dispatcher);
  return h("div",
    {
      key: attrs.key || "card-overlay",
      style: attrs.style,
      className: [
        classes.overlay,
        attrs.sheet ? classes.overlaySheet : null,
        attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
        attrs.tone === "light" ? "pe-light-tone" : null,
      ].join(" ")
    },
    [
      h(element, {
        key: "content",
        className: [
          classes.overlayContent,
          attrs.className || attrs[k.class]
        ].join(" ")
      }, content),
      h("div",
        {
          key: "dimmer",
          className: classes.mediaDimmer
        }
      )
    ]
  );
};

const createAny = ({ attrs, h, k }) => {
  const element = attrs.element || "div";
  return h(element, Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      key: attrs.key || "card-any",
      className: [
        classes.any,
        attrs.tight ? classes.textTight : null,
        attrs.className || attrs[k.class]
      ].join(" ")
    }
  ), attrs.content);
};

const createText = ({ attrs, h, k }) => {
  const element = attrs.element || "div";
  return h(element, Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      key: attrs.key || "card-text",
      className: [
        classes.text,
        attrs.tight ? classes.textTight : null,
        attrs.className || attrs[k.class]
      ].join(" ")
    },
    attrs.events
  ), attrs.content);
};

const createHeader = ({ attrs, h, k, Icon, ListTile }) => {
  return h(ListTile, Object.assign(
    {},
    attrs,
    {
      key: attrs.key || "card-header",
      className: [
        classes.header,
        attrs.className || attrs[k.class]
      ].join(" ")
    },
    attrs.icon
      ? { front: h(Icon, attrs.icon) }
      : null
  ));
};

export const getElement = vnode =>
  vnode.attrs.element || vnode.attrs.url
    ? "a"
    : "div";

export const onMount = ({ attrs }) => {
  if (attrs.z !== undefined) {
    deprecation("Card", { option: "z", newOption: "shadowDepth" });
  }
  if (attrs.content && !Array.isArray(attrs.content)) {
    deprecation("Card", { message: "option 'content' is restricted to contain only the list of option objects for distinct card areas. To pass other content, use 'children'." });
  }
};

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    attrs.testId && { "data-test-id": attrs.testId },
    {
      className: [
        classes.component,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    },
    attrs.url,
    attrs.events
  );
};

export const createContent = (vnode, { renderer: h, keys: k, CardActions, CardMedia, CardPrimary, Icon, Shadow, ListTile }) => {

  const dispatcher = block => {
    const key = Object.keys(block)[0];
    const attrs = Object.assign(
      {},
      block[key],
      {
        dispatcher,
        key
      }
    );
    switch (key) {
    case "actions": 
      return h(CardActions, attrs);
    case "header": 
      return createHeader({ attrs, h, k, Icon, ListTile });
    case "media": 
      return h(CardMedia, attrs);
    case "overlay": 
      return createOverlay({ dispatcher, attrs, h, k });
    case "primary": 
      return h(CardPrimary, attrs);
    case "text": 
      return createText({ attrs, h, k });
    case "any": 
      return createAny({ attrs, h, k });
    default:
      throw(`Content type "${key}" does not exist`);
    }
  };

  const attrs = vnode.attrs;
  const contents = Array.isArray(attrs.content)
    ? attrs.content.map(dispatcher)
    : attrs.content; // deprecated
  const shadowDepth = attrs.shadowDepth !== undefined
    ? attrs.shadowDepth
    : attrs.z; // deprecated
  const children = attrs.children || vnode.children;
  return [
    h(Shadow,
      {
        shadowDepth: shadowDepth !== undefined
          ? shadowDepth
          : 1,
        animated: true,
        key: "shadow"
      }
    ),
    h("div",
      {
        className: classes.content,
        key: "content"
      },
      contents
    ),
    children
  ];
};
